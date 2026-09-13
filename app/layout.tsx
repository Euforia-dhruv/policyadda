import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Policy ADDA — Your policy, made clear</title>
        <meta
          name="description"
          content="Policy ADDA reads your insurance policies and explains every clause in plain language. Ask anything about your coverage, claims, and rights."
        />
        <meta property="og:title" content="Policy ADDA — Your policy, made clear" />
        <meta
          property="og:description"
          content="Legal clarity for every policyholder. Ask anything, understand everything."
        />
        <meta name="theme-color" content="#05070c" />
      </head>
      <body>{children}</body>
    </html>
  );
}