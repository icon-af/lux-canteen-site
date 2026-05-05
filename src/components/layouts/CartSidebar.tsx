"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for open cart sidebar event
    const handleOpenCart = () => setIsOpen(true);
    document.addEventListener("openCartSidebar", handleOpenCart);

    // Close on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);

    // Close when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("openCartSidebar", handleOpenCart);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="ps-site-overlay"
          style={{
            display: "block",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9998,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* CART SIDEBAR */}
      <div
        className={`ps-panel--sidebar ${isOpen ? "active" : ""}`}
        id="cart-mobile"
        ref={cartRef}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          right: 0,
        }}
      >
        <div className="ps-panel__header">
          <h3>Shopping Cart</h3>
          <button
            className="ps-btn--close"
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div className="navigation__content">
          <div className="ps-cart--mobile">
            <div className="ps-cart__content">
              <div className="ps-cart__items">
                {/* ITEM 1 */}
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

                {/* ITEM 2 */}
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

              {/* FOOTER */}
              <div className="ps-cart__footer">
                <h3>
                  Sub Total: <strong>$48.00</strong>
                </h3>

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
          </div>
        </div>
      </div>
    </>
  );
}