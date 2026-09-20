import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { data } from "@/lib/data";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import HowSection from "@/components/HowSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import FaqSection from "@/components/FaqSection";
import CtaBand from "@/components/CtaBand";
import EnquirySection from "@/components/EnquirySection";

export default function HomePage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  return (
    <>
      <Hero copy={copy} locale={locale} />
      <CategoriesSection categories={data.categories()} copy={copy} locale={locale} />
      <HowSection copy={copy} />
      <WhySection copy={copy} />
      <EnquirySection copy={copy} locale={locale} />
      <TestimonialsSection copy={copy} locale={locale} />
      <PartnersSection copy={copy} locale={locale} />
      <FaqSection copy={copy} locale={locale} />
      <CtaBand copy={copy} />
    </>
  );
}
