import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Beats from "@/components/Beats";
import How from "@/components/How";
import Why from "@/components/Why";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Beats />
        <How />
        <Why />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}