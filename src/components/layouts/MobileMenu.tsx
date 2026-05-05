"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for open mobile menu event
    const handleOpenMenu = () => setIsOpen(true);
    document.addEventListener("openMobileMenu", handleOpenMenu);

    // Close on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);

    // Close when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("openMobileMenu", handleOpenMenu);
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

      {/* Mobile Menu */}
      <div
        className={`ps-panel--sidebar ${isOpen ? "active" : ""}`}
        id="navigation-mobile"
        ref={menuRef}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="ps-panel__header">
          <h3>Menu</h3>
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

        <div className="ps-panel__content">
          <ul className="menu--mobile">
            <li className="current-menu-item menu-item-has-children">
              <Link href="/">Home</Link>
              <span className="sub-toggle"></span>
              <ul className="sub-menu">
                <li><Link href="/">Homepage 1</Link></li>
                <li><Link href="/homepage-2">Homepage 2</Link></li>
                <li><Link href="/homepage-3">Homepage 3</Link></li>
                <li><Link href="/homepage-4">Homepage 4</Link></li>
                <li><Link href="/homepage-5">Homepage 5</Link></li>
                <li><Link href="/homepage-6">Homepage 6</Link></li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link href="/shop">Shop</Link>
              <span className="sub-toggle"></span>
              <ul className="sub-menu">
                <li><Link href="/shop-default">Shop Default</Link></li>
                <li><Link href="/shop-fullwidth">Shop Fullwidth</Link></li>
                <li><Link href="/shop-fullwidth-no-sidebar">Shop Fullwidth No Sidebar</Link></li>
                <li><Link href="/shop-no-sidebar">Shop No Sidebar</Link></li>
                <li><Link href="/shop-sidebar-right">Shop Sidebar Right</Link></li>
                <li><Link href="/shop-horizontal">Shop Horizontal</Link></li>
              </ul>
            </li>

            <li><Link href="/about">About</Link></li>

            <li className="current-menu-item menu-item-has-children">
              <Link href="/pages">Pages</Link>
              <span className="sub-toggle"></span>
              <ul className="sub-menu">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/checkout">Checkout</Link></li>
                <li><Link href="/wishlist">Wishlist</Link></li>
                <li><Link href="/compare">Compare</Link></li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link href="/blog">News</Link>
              <span className="sub-toggle"></span>
              <ul className="sub-menu">
                <li><Link href="/blog-grid">Blog grid</Link></li>
                <li><Link href="/blog-grid-fullwidth">Blog grid fullwidth</Link></li>
                <li><Link href="/blog-list">Blog List</Link></li>
                <li><Link href="/blog-detail">Blog Detail</Link></li>
              </ul>
            </li>

            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}