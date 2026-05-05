import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="ps-footer">
        <div className="ps-footer__content">
          <div className="container">

            {/* LEFT */}
            <div className="ps-footer__left">
              <form className="ps-form--footer-subscribe">
                <h3>Get news & offer</h3>
                <p>Sign up for our mailing list to get latest update and offers</p>

                <div className="form-group--inside">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your email..."
                  />
                  <button>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>

                <p>* Don't worry, we never spam</p>
              </form>
            </div>

            {/* CENTER */}
            <div className="ps-footer__center">
              <div className="ps-site-info">
                <Link href="/" className="ps-logo">
                  <img src="/logo.png" style={{width: '100px'}} alt="logo" />
                </Link>

                <p>Cape Town, South Africa</p>
                <p>Email: info@luxbakery.co.za</p>
                <p>
                  Phone: <span className="ps-hightlight">+455 45 454555</span>
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="ps-footer__right">
              <aside className="widget widget_footer">
                <h3 className="widget-title">Opening Time</h3>
                <p>
                  Monday - Friday: <span>08:00 am - 08:30 pm</span>
                </p>
                <p>
                  Saturday - Sunday: <span>10:00 am - 16:30 pm</span>
                </p>

                <ul className="ps-list--payment-method">
                  <li><i className="fa fa-cc-mastercard"></i></li>
                  <li><i className="fa fa-cc-visa"></i></li>
                  <li><i className="fa fa-cc-paypal"></i></li>
                  <li><i className="fa fa-cc-discover"></i></li>
                </ul>
              </aside>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="ps-footer__bottom">
          <div className="container">
            <ul className="ps-list--social">
              <li><i className="fa fa-facebook"></i></li>
              <li><i className="fa fa-twitter"></i></li>
              <li><i className="fa fa-instagram"></i></li>
            </ul>

            <p>© LuxBakery 2026 All rights reserved</p>
          </div>
        </div>
      </footer>
 
      {/* BACK TO TOP */}
      <div id="back2top">
        <i className="pe-7s-angle-up"></i>
      </div>

        {/* Site Overlay */}
        <div className="ps-site-overlay"></div>
        
        {/* Loader */}
        {/* <div id="loader-wrapper">
            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
        </div>  */}
    </>
  );
}