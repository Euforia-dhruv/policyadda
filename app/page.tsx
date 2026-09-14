import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { data } from "@/lib/data";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import TrustBand from "@/components/TrustBand";
import CategoriesSection from "@/components/CategoriesSection";
import HowSection from "@/components/HowSection";
import FeaturedSection from "@/components/FeaturedSection";
import WhySection from "@/components/WhySection";
import SupportSection from "@/components/SupportSection";
import FaqSection from "@/components/FaqSection";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  return (
    <>
      <Hero copy={copy} locale={locale} />
      <Ticker />
      <TrustBand copy={copy} />
      <CategoriesSection categories={data.categories()} copy={copy} locale={locale} />
      <HowSection copy={copy} />
      <FeaturedSection policies={data.featuredPolicies()} copy={copy} locale={locale} />
      <WhySection copy={copy} />
      <SupportSection copy={copy} locale={locale} />
      <FaqSection copy={copy} locale={locale} />
      <CtaBand copy={copy} />
    </>
  );
}