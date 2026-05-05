export default function AwardsSection() {
  const awards = [
    {
      image: "/img/awards/1.png",
      title: "BAKERY OF THE YEAR",
      period: "1990 - 2010",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus.",
    },
    {
      image: "/img/awards/2.png",
      title: "CUPCAKES SHOP OF THE YEAR",
      period: "2012 - 2018",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus.",
    },
    {
      image: "/img/awards/3.png",
      title: "Awards Bakery academy",
      period: "2012 - 2018",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus.",
    },
  ];

  return (
    <div
      className="ps-section ps-home-awards bg--cover"
      style={{ backgroundImage: "url('/img/bg/home-2/home-award.jpg')" }}
    >
      <div className="container">
        <div className="ps-section__header">
          <p>CHIKER STORE</p>
          <h3>Our Awards</h3>
          <i className="chikery-tt3"></i>
        </div>

        <div className="ps-section__content">
          <div className="row">
            {awards.map((award, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
              >
                <div className="ps-block--award">
                  <div className="ps-block__header">
                    <img src={award.image} alt={award.title} />
                    <h4>{award.title}</h4>
                    <p>{award.period}</p>
                  </div>
                  <div className="ps-block__content">
                    <p>{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}