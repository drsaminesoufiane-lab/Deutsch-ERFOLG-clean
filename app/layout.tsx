
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Deutsch-Erfolg | Deutsch lernen. Erfolgreich sein!",
    template: "%s | Deutsch-Erfolg",
  },
  description:
    "Deutsch-Erfolg : Ihre Plattform zum Deutschlernen und zum erfolgreichen Bestehen der Deutschprüfungen.",
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
