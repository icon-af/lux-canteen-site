"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartOpen(false);
      }
    };

    if (cartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartOpen]);

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <header className="header header--default" data-sticky="true">
        {/* LEFT */}
        <div className="header__left">
          {/* <p>
            <i className="fa fa-clock-o"></i> 08:00 am - 08:30 pm
          </p> */}
        </div>

        {/* CENTER NAV */}
        <div className="header__center">
          <nav className="header__navigation left">
            <ul className="menu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>

          {/* LOGO */}
          <div className="header__logo">
            <Link className="ps-logo" href="/">
              <img src="/logo.png" alt="Chikery Logo" />
            </Link>
          </div>

          {/* RIGHT NAV */}
          <nav className="header__navigation right">
            <ul className="menu">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </nav>
        </div>

        {/* ACTIONS */}
        <div className="header__right">
          <div className="header__actions">

            {/* SEARCH - Opens SearchPopup via event */}
            {/* <a
              className="ps-search-btn"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.dispatchEvent(new CustomEvent("openSearch"));
              }}
            >
              <i className="fa fa-search"></i>
            </a> */}

            {/* WISHLIST */}
            {/* <Link href="/wishlist">
              <i className="fa fa-heart-o"></i>
            </Link> */}

            {/* ================= CART DROPDOWN ================= */}
            <div className="ps-cart--mini" ref={cartRef}>
              {/* <a
                className="ps-cart__toggle"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCartOpen(!cartOpen);
                }}
              >
                <i className="fa fa-shopping-basket"></i>
                <span><i>2</i></span>
              </a> */}

              {/* hover dropdown */}
              {cartOpen && (
                <div className="ps-cart__content" style={{ display: "block" }}>
                  <div className="ps-cart__items">
                    <div className="ps-product--mini-cart">
                      <div className="ps-product__thumbnail">
                        <Link href="/product-default">
                          <img src="/img/product/12.png" alt="" />
                        </Link>
                      </div>
                      <div className="ps-product__content">
                        <span className="ps-btn--close"></span>
                        <Link className="ps-product__title" href="/product-default">
                          Jean Woman Summer
                        </Link>
                        <p><strong>Quantity: 1</strong></p>
                        <small>$12.00</small>
                      </div>
                    </div>

                    <div className="ps-product--mini-cart">
                      <div className="ps-product__thumbnail">
                        <Link href="/product-default">
                          <img src="/img/product/13.png" alt="" />
                        </Link>
                      </div>
                      <div className="ps-product__content">
                        <span className="ps-btn--close"></span>
                        <Link className="ps-product__title" href="/product-default">
                          Jean Woman Summer
                        </Link>
                        <p><strong>Quantity: 1</strong></p>
                        <small>$12.00</small>
                      </div>
                    </div>
                  </div>

                  <div className="ps-cart__footer">
                    <h3>Sub Total: <strong>$48.00</strong></h3>
                    <figure>
                      <Link className="ps-btn" href="/shopping-cart">
                        View Cart
                      </Link>
                      <Link className="ps-btn ps-btn--dark" href="/checkout">
                        Checkout
                      </Link>
                    </figure>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <header className="header header--mobile" data-sticky="false">
        <div className="header__content">
          <div className="header__left">
            <a
              className="ps-toggle--sidebar"
              href="#navigation-mobile"
              onClick={(e) => {
                e.preventDefault();
                document.dispatchEvent(new CustomEvent("openMobileMenu"));
              }}
            >
              <i className="fa fa-bars"></i>
            </a>
          </div>

          <div className="header__center">
            <Link className="ps-logo" href="/">
              <img src="/logo.png" alt="Chikery Logo" />
            </Link>
          </div>

          <div className="header__right">
            <div className="header__actions">
              <Link href="/wishlist">
                <i className="fa fa-heart-o"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE BOTTOM NAVIGATION ================= */}
      <div className="navigation--list">
        <div className="navigation__content">
          <Link className="navigation__item active" href="/">
            <i className="fa fa-home"></i>
          </Link>
          <a
            className="navigation__item ps-toggle--sidebar"
            href="#navigation-mobile"
            onClick={(e) => {
              e.preventDefault();
              document.dispatchEvent(new CustomEvent("openMobileMenu"));
            }}
          >
            <i className="fa fa-bars"></i>
          </a>
          <a
            className="navigation__item ps-toggle--sidebar"
            href="#search-sidebar"
            onClick={(e) => {
              e.preventDefault();
              document.dispatchEvent(new CustomEvent("openSearch"));
            }}
          >
            <i className="fa fa-search"></i>
          </a>
          <a
            className="navigation__item ps-toggle--sidebar"
            href="#cart-mobile"
            onClick={(e) => {
              e.preventDefault();
              document.dispatchEvent(new CustomEvent("openCartSidebar"));
            }}
          >
            <i className="fa fa-shopping-basket"></i>
          </a>
        </div>
      </div>
    </>
  );
}