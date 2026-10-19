"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firm";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E7E3D9] bg-[#FAF8F5]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <Link
          href="/"
          className="group flex flex-col shrink-0 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E]"
          aria-label="Pahuja & Co. Chartered Accountants Home"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0C1524]">
            Pahuja &amp; Co.
          </span>
          <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase text-[#64748B]">
            Chartered Accountants · New Delhi
          </span>
        </Link>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href) && !link.href.includes("#");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#0C1524] ${
                  isActive
                    ? "text-[#0C1524] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B88E3E]"
                    : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${FIRM_DETAILS.phones.office}`}
            className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-600 hover:text-[#0C1524] transition-colors whitespace-nowrap"
            title="Call New Delhi Office"
          >
            <Phone className="h-3.5 w-3.5 text-[#B88E3E]" />
            <span>011 4562 6500</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-none border border-[#0C1524] bg-[#0C1524] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-[#1E293B] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E] whitespace-nowrap shrink-0"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/contact"
            className="rounded-none border border-[#0C1524] bg-[#0C1524] px-3 py-1.5 text-xs font-medium text-white"
          >
            Consult
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-[#FAF8F5] p-6 shadow-2xl md:hidden overflow-y-auto border-t border-[#E7E3D9]">
          <div className="flex flex-col space-y-6">
            <div className="text-xs uppercase tracking-wider text-[#64748B] font-medium border-b border-[#E7E3D9] pb-2">
              Menu Navigation
            </div>
            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-900 hover:text-[#B88E3E] transition-colors py-1 flex items-center justify-between border-b border-[#E7E3D9]/50"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </Link>
              ))}
            </nav>

            <div className="pt-4 space-y-4 border-t border-[#E7E3D9]">
              <div className="text-xs uppercase tracking-wider text-[#64748B] font-medium">
                Direct Contact
              </div>
              <div className="space-y-2 text-sm text-slate-800">
                <a
                  href={`tel:${FIRM_DETAILS.phones.office}`}
                  className="flex items-center gap-2 py-1 text-slate-800 hover:text-[#B88E3E]"
                >
                  <Phone className="h-4 w-4 text-[#B88E3E]" />
                  <span>Office: {FIRM_DETAILS.phones.officeDisplay}</span>
                </a>
                <a
                  href={`tel:${FIRM_DETAILS.phones.mobile}`}
                  className="flex items-center gap-2 py-1 text-slate-800 hover:text-[#B88E3E]"
                >
                  <Phone className="h-4 w-4 text-[#B88E3E]" />
                  <span>Mobile: {FIRM_DETAILS.phones.mobileDisplay}</span>
                </a>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-[#0C1524] py-3 text-xs uppercase tracking-wider font-semibold text-white"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
