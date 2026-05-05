import Link from "next/link";
import BlogSection from "@/src/components/home/BlogSection";
import BackToTop from "@/src/components/common/BackToTop";
import Footer from "@/src/components/layouts/Footer";
import Header from "@/src/components/layouts/Header";
import MobileMenu from "@/src/components/layouts/MobileMenu";

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="ps-page--about" id="blog-list">
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
                <li>Blog</li>
              </ul>
            </div>
            <h1 className="ps-hero__heading">Blog</h1>
          </div>
        </div>
        <BlogSection />
      </div>
      <BackToTop />
      <Footer />
      <MobileMenu />
    </>
  );
}
