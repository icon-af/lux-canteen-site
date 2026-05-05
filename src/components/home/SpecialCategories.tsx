import Link from "next/link";
import { BarChart3, Settings, Truck, DollarSign } from "lucide-react";

export default function SpecialCategories() {
  const categories = [
    {
      icon: BarChart3,
      title: "Consistent Quality Across Volume",
      description: "Advanced production systems ensure every batch meets our exacting standards, regardless of order size.",
    },
    {
      icon: Settings,
      title: "Production-Grade Systems",
      description: "State-of-the-art equipment and standardized processes deliver commercial-grade reliability.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Scheduled delivery routes and logistics partnerships ensure your products arrive fresh and on time.",
    },
    {
      icon: DollarSign,
      title: "Wholesale Pricing Structures",
      description: "Competitive volume pricing with flexible payment terms designed for business partnerships.",
    },
  ];

  return (
    <div
      className="ps-section ps-home-special-categories bg--cover lux-special-categories--decor"
      // data-background="/img/bg/home-2/special-cake.png"
    >
      <div className="container">
        <div className="ps-section__header">
          <p>Why LuxBakery</p>
          <h3>Built for Scale. Not Just Taste.</h3>
          <i className="chikery-tt3"></i>
          <small>
            LuxBakery has been Cape Town's trusted wholesale bakery partner for over two decades. <br />
            We combine traditional baking techniques with modern production capabilities to deliver consistent, high-quality products at scale.
          </small>
        </div>

        <div className="ps-section__content">
          <div className="row">
            {categories.map((category, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
              >
                <div className="ps-block--special--cake">
                  <div className="ps-block__icon">
                    <category.icon 
                      size={48} 
                      color="#1F5D53"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="ps-block__content">
                    <h4>
                      <Link href="/wholesale-info">{category.title}</Link>
                    </h4>
                    <p>{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ps-section__footer text-center">
          <Link className="ps-btn ps-btn--outline" href="/wholesale-pricing">
            Request Wholesale Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}