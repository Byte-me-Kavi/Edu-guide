import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyDifferent from "@/components/WhyDifferent";
import Domains from "@/components/Domains";
import Voices from "@/components/Voices";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyDifferent />
        <Domains />
        <Voices />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
