import ProductCard from "@/src/components/common/ProductCard";

export default function BreadOfTheDay() {
  const products = [
    {
      image: "/img/product/23.png",
      title: "Red sugar flower",
      weight: "350g",
      time: "30 Min",
      temp: "120°C",
      price: 12.00,
      originalPrice: 16.00,
      badge: "sale" as const,
    },
    {
      image: "/img/product/39.png",
      title: "Red sugar flower",
      weight: "350g",
      time: "30 Min",
      temp: "120°C",
      price: 12.00,
      originalPrice: 16.00,
      badge: "sale" as const,
    },
    {
      image: "/img/product/24.png",
      title: "Red sugar flower",
      weight: "350g",
      time: "30 Min",
      temp: "120°C",
      price: 12.00,
    },
    {
      image: "/img/product/38.png",
      title: "Red sugar flower",
      weight: "350g",
      time: "30 Min",
      temp: "120°C",
      price: 12.00,
    },
    {
      image: "/img/product/41.png",
      title: "Red sugar flower",
      weight: "350g",
      time: "30 Min",
      temp: "120°C",
      price: 12.00,
      badge: "new" as const,
    },
    {
      image: "/img/product/22.png",
      title: "Red sugar flower",
      weight: "350g",
      time: "30 Min",
      temp: "120°C",
      price: 12.00,
    },
  ];

  return (
    <div className="ps-section ps-home-product">
      <div className="container">
        <div className="ps-section__header">
          <p>Our Special Menu</p>
          <h3>Bread of the day</h3>
          <i className="chikery-tt3"></i>
        </div>

        <div className="ps-section__content">
          <div className="row">
            {products.map((product, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}