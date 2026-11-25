
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Conserver les cookies Supabase lors des redirections
  const redirectWithCookies = (url: URL) => {
    const redirectResponse = NextResponse.redirect(url);

    response.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie);
    });

    return redirectResponse;
  };

  // Réponse temporaire en cas d'erreur serveur
  const temporaryError = () => {
    const errorResponse = NextResponse.json(
      {
        error: "Service temporairement indisponible. Veuillez réessayer.",
      },
      {
        status: 503,
      }
    );

    response.cookies.getAll().forEach((cookie) => {
      errorResponse.cookies.set(cookie);
    });

    return errorResponse;
  };

  // Vérification de la session utilisateur
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (
    authError &&
    authError.name !== "AuthSessionMissingError"
  ) {
    console.error("Erreur vérification session :", authError.message);
    return temporaryError();
  }

  // Aucune session valide
  if (!user) {
    return redirectWithCookies(
      new URL("/connexion", request.url)
    );
  }

  const pathname = request.nextUrl.pathname;

  // Récupération du profil
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role, is_pro, pro_until")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    console.error("Erreur récupération profil :", profileError.message);
    return temporaryError();
  }

  // Protection de l'administration
  if (pathname.startsWith("/administration")) {
    if (profile?.role !== "admin") {
      return redirectWithCookies(
        new URL("/espace-etudiant", request.url)
      );
    }
  }

  // Protection de l'espace étudiant
  if (pathname.startsWith("/espace-etudiant")) {
    // Les étudiants et administrateurs peuvent accéder à cet espace
    if (
      profile?.role !== "student" &&
      profile?.role !== "admin"
    ) {
      return redirectWithCookies(
        new URL("/connexion", request.url)
      );
    }

    // Vérification de l'appareil uniquement pour les étudiants
    if (profile.role === "student") {
      const deviceId = request.cookies.get(
        "deutsch_erfolg_device_id"
      )?.value;

      if (!deviceId) {
        return redirectWithCookies(
          new URL("/connexion", request.url)
        );
      }

      const {
        data: authorized,
        error: deviceError,
      } = await supabase.rpc("is_current_student_device", {
        p_device_id: deviceId,
      });

      if (deviceError) {
        console.error(
          "Erreur vérification appareil :",
          deviceError.message
        );

        return temporaryError();
      }

      if (authorized !== true) {
        const redirectResponse = redirectWithCookies(
          new URL("/connexion", request.url)
        );

        redirectResponse.cookies.delete(
          "deutsch_erfolg_device_id"
        );

        return redirectResponse;
      }
    }

    // ==========================================
    // PROTECTION CENTRALISÉE DES EXAMENS B1 / B2
    // ==========================================

    // Exemple :
    // /espace-etudiant/examens/b1/lesen/teil-1/exercice-6

    const exerciseMatch = pathname.match(
      /^\/espace-etudiant\/examens\/(b1|b2)\/([^/]+)\/teil-(\d+)\/exercice-(\d+)$/
    );

    if (exerciseMatch && profile.role === "student") {
      const exerciseNumber = Number(exerciseMatch[4]);

      // Les cinq premiers exercices de chaque Teil sont gratuits
      const isFreeExercise = exerciseNumber >= 1 &&
        exerciseNumber <= 5;

      if (!isFreeExercise) {
        // Vérification de l'abonnement PRO actif
        const isProActive =
          profile.is_pro === true &&
          profile.pro_until !== null &&
          new Date(profile.pro_until).getTime() > Date.now();

        if (!isProActive) {
          const proUrl = new URL(
            "/espace-etudiant/pro",
            request.url
          );

          // Permet de revenir à l'exercice après activation PRO
          proUrl.searchParams.set(
            "from",
            pathname + request.nextUrl.search
          );

          return redirectWithCookies(proUrl);
        }
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/administration/:path*",
    "/espace-etudiant/:path*",
  ],
};
