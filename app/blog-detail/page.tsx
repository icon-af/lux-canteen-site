import Link from "next/link";
import BackToTop from "@/src/components/common/BackToTop";
import Footer from "@/src/components/layouts/Footer";
import Header from "@/src/components/layouts/Header";
import MobileMenu from "@/src/components/layouts/MobileMenu";

export default function BlogDetailPage() {
  return (
    <>
      <Header />
      <div className="ps-page--about" id="blog-detail">
        <div
          className="ps-hero bg--cover"
          style={{ backgroundImage: "url('/img/hero/banner-hero.png')" }}
        >
          <div className="ps-hero__container">
            <div className="ps-breadcrumb">
              <ul className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>Blog Detail</li>
              </ul>
            </div>
            <div className="ps-post--detail-header">
              <h1>
                Mauris elementum accumsan
                <br />
                leo vel tempor
              </h1>
              <div className="ps-post__meta">
                <span>Food</span>
                <span>
                  March 31, 2019 by <Link href="#">Admin</Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="ps-hero--blog">
          <img src="/img/blog/blog-detail.jpg" alt="Blog detail hero" />
        </div>

        <div className="container">
          <div className="ps-blog ps-blog--sidebar">
            <div className="ps-blog__left">
              <div className="ps-post--detail">
                <div className="ps-post__content">
                  <p>
                    <strong className="large">
                      Class aptent taciti sociosqu ad litora torquent per.
                      Conubia vitae viverra urna nulla sed turpis. Mauris
                      elementum accumsan leo vel tempor.
                    </strong>
                  </p>
                  <p>
                    Sed id interdum urna. Nam ac elit a ante commodo tristique.
                    Duis lacus urna, condimentum a vehicula a, hendrerit ac
                    nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Curabitur sed turpis feugiat, mollis felis vel,
                    viverra metus.
                  </p>
                  <div className="ps-post__tags">
                    <span>Tags</span>
                    <Link href="#">Branding</Link>
                    <Link href="#">Interior</Link>
                    <Link href="#">Bakery</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="ps-blog__right">
              <aside className="widget widget_blog widget_recent-posts">
                <h3 className="widget-title">RECENT POST</h3>
                <div className="ps-post--sidebar">
                  <div className="ps-post__thumbnail">
                    <Link className="ps-post__overlay" href="/blog-detail"></Link>
                    <img src="/img/blog/blog-sidebar/1.jpg" alt="Recent post 1" />
                  </div>
                  <div className="ps-post__content">
                    <Link className="ps-post__title" href="/blog-detail">
                      Nam ac elit a ante commodo
                    </Link>
                    <p>
                      By <Link href="#">Admin</Link>
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
      <Footer />
      <MobileMenu />
    </>
  );
}
