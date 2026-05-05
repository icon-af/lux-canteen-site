const ContactSection = () => {
  return (
    <div
      className="ps-section ps-home-delivery bg--cover"
    //   data-background="img/bg/home-4/home-delivery.jpg"
    >
      <div className="container">
        <form className="ps-form--delivery" action="#" method="get">
          <div className="ps-form__header">
            <i className="chikery-tt5" />
            <h4>LuxBakery Store</h4>
            <h3>Delivery Now</h3>
            <p>
              Book your table now online and get a confirmation in second. For
              bar and terrace booking, please contact us directly via
              <span> (+334) 3445445</span>
            </p>
          </div>
          <div className="ps-form__content">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Name" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Date" />
                </div>
              </div> 
            </div>
          </div>
          <div className="ps-form__footer">
            <button className="ps-btn" type="submit">
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;