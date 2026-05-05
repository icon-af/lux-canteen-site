import Link from "next/link";

export default function WhySection() {
   
  return (
    <div className="ps-section ps-home-about">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="ps-section__header">
              <p>WELCOME TO LUXBAKERY</p>
              <h3>Why Choose LuxBakery</h3>
              <i className="chikery-tt1"></i>
            </div>
            <div className="ps-section__content">
              <p>
                "LuxBakery has been Cape Town’s trusted wholesale bakery partner for over two decades, combining traditional baking with modern production to deliver consistent, high-quality products at scale. We ensure dependable service through production-grade systems, reliable delivery, structured wholesale pricing, and flexible custom supply solutions tailored to hospitality and retail needs."
              </p>
              {/* <div className="ps-section__image">
                <img src="/img/homepage/home-1/signature.png" alt="Signature" />
              </div>
              <h5>
                <span>Sarah Mitchell</span> - CEO LuxBakery
              </h5> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="ps-section__image">
              <img src="/img/homepage/home-3/home-about.png" alt="LuxBakery Production" />
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}