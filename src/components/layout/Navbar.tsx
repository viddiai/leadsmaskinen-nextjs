"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeId = useScrollSpy(
    NAV_LINKS.map((l) => l.href.replace("#", "")),
    120
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: "var(--max-w-content)",
          padding: "0.75rem clamp(1rem, 3vw, 2rem)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-[family-name:var(--font-display)] text-xl font-bold text-graphite"
        >
          <img src="/logo_L.png" alt="" className="h-8 w-auto" />
          <span>Leads<span className="text-orange">maskinen</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                activeId === link.href.replace("#", "")
                  ? "text-orange"
                  : "text-steel hover:text-graphite"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            onClick={() => {
              // @ts-expect-error Calendly is loaded externally
              window.Calendly?.initPopupWidget({ url: "https://calendly.com/stefan-245/30min" });
            }}
          >
            Boka konsultation
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <X className="h-6 w-6 text-graphite" />
          ) : (
            <Menu className="h-6 w-6 text-graphite" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-grey-light">
          <div className="flex flex-col gap-4 p-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-base font-medium text-steel hover:text-graphite"
              >
                {link.label}
              </a>
            ))}
            <Button
              fullWidth
              onClick={() => {
                setIsMobileOpen(false);
                // @ts-expect-error Calendly is loaded externally
                window.Calendly?.initPopupWidget({ url: "https://calendly.com/stefan-245/30min" });
              }}
            >
              Boka konsultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
