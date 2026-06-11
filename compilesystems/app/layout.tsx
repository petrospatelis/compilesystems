import type { Metadata, Viewport } from "next";
import { I18nProvider } from "./components/i18n-provider";
import { ThemeProvider } from "./components/theme-provider";
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
    <html
      lang="en"
      className="h-full antialiased"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("compile-systems-theme");if(t==="light")document.documentElement.setAttribute("data-theme","light");}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-clip font-sans">
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
