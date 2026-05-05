import Link from "next/link";
import AboutSection from "@/src/components/home/AboutSection";
import BackToTop from "@/src/components/common/BackToTop";
import Footer from "@/src/components/layouts/Footer";
import Header from "@/src/components/layouts/Header";
import MobileMenu from "@/src/components/layouts/MobileMenu";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="ps-page--about" id="about-us">
        <div
          className="ps-hero bg--cover"
          style={{ backgroundImage: "url('/img/hero/shop-hero.png')" }}
        >
          <div className="ps-hero__container">
            <div className="ps-breadcrumb">
              <ul className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
            <h1 className="ps-hero__heading">About Us</h1>
          </div>
        </div>
        <AboutSection />
      </div>
      <BackToTop />
      <Footer />
      <MobileMenu />
    </>
  );
}
