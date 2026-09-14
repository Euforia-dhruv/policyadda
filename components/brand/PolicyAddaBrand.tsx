import Image from "next/image";

/**
 * Official PolicyAdda brand lockup.
 * Single source of truth: public/logo.png (PA seal) + public/moto.png (wordmark).
 * Never recolor, filter, or reshape these assets.
 */
export default function PolicyAddaBrand({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "icon";
  className?: string;
}) {
  return (
    <a
      href="/"
      className={`brand ${variant === "icon" ? "brand-icon" : "brand-full"} ${className}`.trim()}
      aria-label="PolicyAdda — Policy Aapka, Adda Apna"
    >
      <Image
        src="/logo.png"
        alt=""
        aria-hidden
        width={1254}
        height={1254}
        sizes="48px"
        className="brand-seal"
      />
      {variant === "full" && (
        <Image
          src="/moto.png"
          alt=""
          aria-hidden
          width={1128}
          height={191}
          sizes="240px"
          className="brand-wordmark"
        />
      )}
    </a>
  );
}