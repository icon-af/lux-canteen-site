"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

export default function SearchPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for open search event
    const handleOpenSearch = () => setIsOpen(true);
    document.addEventListener("openSearch", handleOpenSearch);

    // Close on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);

    // Close when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("openSearch", handleOpenSearch);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Handle search logic
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
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

      {/* SEARCH POPUP */}
      <div
        className="ps-search"
        id="site-search"
        ref={searchRef}
        style={{
          display: "block",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      >
        <a
          className="ps-btn--close"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
        >
          ✕
        </a>

        <div className="ps-search__content">
          <form className="ps-form--primary-search" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />

            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}