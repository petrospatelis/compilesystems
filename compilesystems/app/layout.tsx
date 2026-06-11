import type { Metadata, Viewport } from "next";
import { I18nProvider } from "./components/i18n-provider";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Compile Systems Ltd | Your vision. Our code.",
  description:
    "Compile Systems Ltd — IT, agile, cloud, web and mobile engineering. Your vision. Our code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full min-w-0 flex-col overflow-x-clip font-sans">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
