import type { Metadata } from "next";
import { I18nProvider } from "./components/i18n-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compile Systems Ltd | Software Engineering",
  description:
    "Compile Systems Ltd delivers modern software engineering — architecture, development, and delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
