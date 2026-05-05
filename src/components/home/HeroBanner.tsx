"use client";

import Link from "next/link";

export default function HeroBanner() {
  return (
    <div
      className="ps-home-banner bg--cover"
      style={{ backgroundImage: "url('/img/bg/home-2/home-banner.png')" }}
    >
      <div className="ps-product--banner mt-10">
        {/* <div className="ps-product__thumbnail">
          <Link href="/wholesale-pricing">
            <img src="/img/banner/home-2/1.png" alt="Premium Baking" />
          </Link>
        </div> */}
        <div className="ps-product__content">
          <h4>LUXBAKERY WHOLESALE</h4>
          <Link className="ps-product__title" href="/wholesale-pricing">
            Premium Baking <br /> Built to Supply
          </Link>
          <p>Bakery - Sweet - Bio</p>
          <Link className="ps-btn" href="/wholesale-pricing">
            Request Wholesale Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}