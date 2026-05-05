import Link from "next/link";

interface ProductCardProps {
  product: {
    image: string;
    title: string;
    weight: string;
    time: string;
    temp: string;
    price: number;
    originalPrice?: number;
    badge?: "sale" | "new";
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="ps-product">
      <div className="ps-product__thumbnail">
        <img src={product.image} alt={product.title} />
        <Link className="ps-product__overlay" href="/product-default"></Link>
        
        {product.badge === "sale" && (
          <span className="ps-badge ps-badge--sale">
            <i>30%</i>
          </span>
        )}
        
        {product.badge === "new" && (
          <span className="ps-badge ps-badge--new">
            <i>New</i>
          </span>
        )}
      </div>

      <div className="ps-product__content">
        <div className="ps-product__desc">
          <Link className="ps-product__title" href="/products">
            {product.title}
          </Link>
          <p>
            <span>{product.weight}</span>
            <span>{product.time}</span>
            <span>{product.temp}</span>
          </p>

          {product.originalPrice ? (
            <span className="ps-product__price sale">
              <del>${product.originalPrice.toFixed(2)}</del> ${product.price.toFixed(2)}
            </span>
          ) : (
            <span className="ps-product__price">${product.price.toFixed(2)}</span>
          )}
        </div>

        <div className="ps-product__shopping">
          <a className="ps-btn ps-product__add-to-cart" href="#">
            Add to cart
          </a>
          <div className="ps-product__actions">
            <a href="#">
              <i className="fa fa-heart-o"></i>
            </a>
            <a href="#">
              <i className="fa fa-random"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
