import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PolicyAdda — Insurance assistance & policy discovery",
  description:
    "PolicyAdda helps you understand insurance categories and policy options in plain language — then guides you from enquiry to policy access. Based in Ranchi.",
};

const themeInit = `(function(){try{var t=localStorage.getItem('policyadda_theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();
  const copy = getCopy(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#F8FAFC" />
        <meta
          property="og:description"
          content="PolicyAdda explains insurance in plain language and guides you through every step."
        />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${inter.variable} ${serif.variable}`}>
        <div className="grain" aria-hidden="true" />
        <Nav copy={copy} locale={locale} />
        <main>{children}</main>
        <Footer copy={copy} locale={locale} config={siteConfig} />
      </body>
    </html>
  );
}