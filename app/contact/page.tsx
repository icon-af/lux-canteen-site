import Link from "next/link";
import ContactSection from "@/src/components/home/ContactSection";
import BackToTop from "@/src/components/common/BackToTop";
import Footer from "@/src/components/layouts/Footer";
import Header from "@/src/components/layouts/Header";
import MobileMenu from "@/src/components/layouts/MobileMenu";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="ps-page--about" id="contact-us">
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
                <li>Contact</li>
              </ul>
            </div>
            <h1 className="ps-hero__heading">Contact</h1>
          </div>
        </div>
        <ContactSection />
      </div>
      <BackToTop />
      <Footer />
      <MobileMenu />
    </>
  );
}
