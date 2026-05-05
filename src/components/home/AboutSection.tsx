export default function AboutSection() {
  return (
    // data-background="/img/bg/home-about.jpg"
    <div className="ps-section ps-home-about bg--cover" data-background="/img/bg/home-about.jpg">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="ps-section__image">
              <img src="/img/homepage/home-1/home-about.png" alt="About Chikery" />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="ps-section__header pb-4">
              <p>About LuxBakery</p>
              <h3>Production. Precision. Supply.</h3> 
            </div>
            <div className="ps-section__content pt-2">
              <p> 
                &quot;LuxBakery is a Cape Town–based food production and supply company built to serve the hospitality and retail industry at scale. <br/><br/>
                Established in 2010, LuxBakery combines production systems, skilled craftsmanship, and operational discipline to deliver consistent, high-quality baked goods and desserts across multiple channels. <br/><br/>
                We are not a retail bakery. We are a production engine. &quot;
              </p>
              {/* <div className="ps-section__image">
                <img src="/img/homepage/home-1/signature.png" alt="Signature" />
              </div>
              <h5>
                <span>Marry Lulie</span> - CEO Chikery
              </h5> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}