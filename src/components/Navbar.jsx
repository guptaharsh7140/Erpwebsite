import React, { useState, useEffect } from "react";

const links = ["Home", "About", "Services", "Features", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-sm" : "bg-white/80"
        } backdrop-blur-md border-b border-slate-100`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="font-sora text-xl font-bold text-navy">
            Campusys<span className="text-brand">ERP</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm font-medium text-slate-500 hover:text-brand transition-colors duration-200"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:block bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30"
          >
            Get Demo
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-navy rounded transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span className={`block w-6 h-0.5 bg-navy rounded transition-all ${open ? "opacity-0" : ""}`} />
            <span
              className={`block w-6 h-0.5 bg-navy rounded transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-base font-medium text-slate-600 hover:text-brand"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 bg-brand text-white text-center py-3 rounded-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            Get Demo
          </a>
        </div>
      )}
    </>
  );
}
