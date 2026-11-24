
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

  // Réponse temporaire en cas d'erreur serveur :
  // ne pas déconnecter l'étudiant pour une panne passagère.
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

  // Une erreur réseau ou serveur ne doit pas provoquer une déconnexion.
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

  // Récupération du profil une seule fois
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  // Une erreur temporaire de base de données ne doit pas
  // être interprétée comme une déconnexion.
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
    if (profile?.role !== "student") {
      return redirectWithCookies(
        new URL("/connexion", request.url)
      );
    }

    // Identifiant de l'appareil
    const deviceId = request.cookies.get(
      "deutsch_erfolg_device_id"
    )?.value;

    if (!deviceId) {
      return redirectWithCookies(
        new URL("/connexion", request.url)
      );
    }

    // Vérification de l'appareil autorisé
    const {
      data: authorized,
      error: deviceError,
    } = await supabase.rpc("is_current_student_device", {
      p_device_id: deviceId,
    });

    // Erreur temporaire Supabase :
    // conserver la session et le cookie de l'appareil.
    if (deviceError) {
      console.error(
        "Erreur vérification appareil :",
        deviceError.message
      );

      return temporaryError();
    }

    // L'appareil a réellement été révoqué ou remplacé.
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

  return response;
}

export const config = {
  matcher: [
    "/administration/:path*",
    "/espace-etudiant/:path*",
  ],
};
