import HeroBanner from "@/src/components/home/HeroBanner";
import SpecialCategories from "@/src/components/home/SpecialCategories";
import AboutSection from "@/src/components/home/AboutSection";
import BackToTop from "@/src/components/common/BackToTop";
import Header from "@/src/components/layouts/Header";
import Footer from "@/src/components/layouts/Footer";
import MobileMenu from "@/src/components/layouts/MobileMenu";
import ContactSection from "@/src/components/home/ContactSection";
import Testinmonials from "@/src/components/home/testinmonials";

export default function Home() {
  return (
    <>
      <Header />
      <div id="homepage-2">
        <HeroBanner />
        <SpecialCategories />
        <AboutSection />
        <Testinmonials />
        <ContactSection />
      </div>
      <BackToTop />
      <Footer />
      <MobileMenu />
    </>
  );
}