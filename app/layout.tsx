
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Deutsch-Erfolg | Apprenez et réussissez en allemand",
    template: "%s | Deutsch-Erfolg",
  },
  description:
    "Deutsch-Erfolg : votre plateforme pour apprendre l'allemand et réussir les examens TELC B1 et B2.",
  applicationName: "Deutsch-Erfolg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
