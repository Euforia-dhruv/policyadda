import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { siteConfig } from "@/content/config";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";

const panchang = localFont({
  src: [
    { path: "../public/fonts/panchang/Panchang-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/panchang/Panchang-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/panchang/Panchang-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/panchang/Panchang-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/panchang/Panchang-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/panchang/Panchang-Extrabold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-panchang",
  display: "swap",
});

const array = localFont({
  src: [
    { path: "../public/fonts/array/Array-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/array/Array-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/array/Array-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-array",
  display: "swap",
});

const stardom = localFont({
  src: "../public/fonts/stardom/Stardom-Regular.woff2",
  variable: "--font-stardom",
  display: "swap",
});

const britney = localFont({
  src: [
    { path: "../public/fonts/britney/Britney-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/britney/Britney-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/britney/Britney-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/britney/Britney-Ultra.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-britney",
  display: "swap",
});

const zodiak = localFont({
  src: [
    { path: "../public/fonts/zodiak/Zodiak-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/zodiak/Zodiak-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/zodiak/Zodiak-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-zodiak",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PolicyAdda — Insurance assistance & policy discovery",
  description:
    "PolicyAdda helps you understand insurance categories and policy options in plain language — then guides you from enquiry to policy access. Based in Ranchi.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem('policyadda_theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();
  const copy = getCopy(locale);

  let signedIn = false;
  if (isSupabaseConfigured()) {
    try {
      const sb = await getServerSupabase();
      if (sb) {
        const { data } = await sb.auth.getUser();
        signedIn = Boolean(data.user);
      }
    } catch {
      // optional session check — never break the shell on auth errors
    }
  }

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
      <body className={`${panchang.variable} ${array.variable} ${stardom.variable} ${britney.variable} ${zodiak.variable}`}>
        <ScrollProgress />
        <div className="grain" aria-hidden="true" />
        <Nav copy={copy} locale={locale} signedIn={signedIn} />
        <main>{children}</main>
        <Footer copy={copy} locale={locale} config={siteConfig} />
      </body>
    </html>
  );
}
