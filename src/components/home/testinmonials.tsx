"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amina Jacobs, Operations Manager",
    alt: "Amina Jacobs",
    text: "LuxBakery has helped us standardize pastry quality across all our hotel outlets. Their production consistency and on-time deliveries make weekly planning easy for our kitchen team.",
    highlight: "Reliable quality at scale, every single week.",
  },
  {
    name: "Thabo Mokoena, Executive Chef",
    alt: "Thabo Mokoena",
    text: "We needed a supplier who could handle volume without dropping standards. LuxBakery delivered from day one with excellent communication and flexible support for our seasonal menus.",
    highlight: "Their team feels like an extension of ours.",
  },
  {
    name: "Leila Petersen, Retail Category Lead",
    alt: "Leila Petersen",
    text: "From artisan breads to dessert components, LuxBakery gives us products we can trust in a fast retail environment. The finish, freshness, and packaging quality are always on point.",
    highlight: "Premium output with dependable supply.",
  },
];

export default function Testinmonials() {
  return (
    <div
      className="ps-section ps-home-testimonials"
      style={{ backgroundColor: "#f5f5f5", padding: "100px 0" }}
    >
      <div className="container">
        <div className="ps-section__header">
          <i className="chikery-tt5"></i>
          <p>Client Testimonials</p>
          <h3>What Partners Say About LuxBakery</h3>
        </div>
        <div className="ps-section__content">
          <Swiper
            className="ps-carousel--dots-2"
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop
            speed={1000}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="ps-block--testimonial">
                  <div className="ps-block__header">
                    <img src="/img/users/1.png" alt={item.alt} />
                  </div>
                  <div className="ps-block__content">
                    <p>
                      {item.text}
                      <span className="hightlight"> {item.highlight}</span>
                    </p>
                  </div>
                  <div className="ps-block__footer">
                    <p>{item.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx global>{`
        .ps-home-testimonials .swiper-pagination-bullet-active {
          background: #9bd5ce;
        }
      `}</style>
    </div>
  );
}