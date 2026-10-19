import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Shield, Star } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firm";

export default function HeroSection() {
  return (
    <section className="relative w-full border-b border-[#E7E3D9] bg-[#FAF8F5] pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Quiet Top Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#B88E3E]">
              <span>Janakpuri, New Delhi</span>
              <span aria-hidden="true">·</span>
              <span>Chartered Accountancy Practice</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0C1524] leading-[1.12] [text-wrap:balance]">
              Clarity in Compliance. <br className="hidden sm:inline" />
              Confidence in Every Decision.
            </h1>

            {/* Supporting Text */}
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Practical accounting, taxation, audit, and business advisory services to help you stay compliant, make informed decisions, and focus on growing your business.
            </p>

            {/* Two Clear CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#0C1524] bg-[#0C1524] px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-[#1E293B] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E] whitespace-nowrap"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-[#E7E3D9] bg-white px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-slate-800 transition-all hover:border-slate-400 hover:bg-[#FAF8F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E] whitespace-nowrap"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Verified Facts Adjacency */}
            <div className="pt-6 border-t border-[#E7E3D9] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 font-semibold text-[#0C1524]">
                  <MapPin className="h-3.5 w-3.5 text-[#B88E3E]" />
                  <span>Ground Floor Office</span>
                </div>
                <p className="text-[11px] text-slate-500">Janakpuri, New Delhi 110058</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 font-semibold text-[#0C1524]">
                  <Star className="h-3.5 w-3.5 fill-[#B88E3E] text-[#B88E3E]" />
                  <span className="tabular-nums">4.0 / 5.0 Rating</span>
                </div>
                <p className="text-[11px] text-slate-500">Google Verified Client Feedback</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 font-semibold text-[#0C1524]">
                  <Shield className="h-3.5 w-3.5 text-[#B88E3E]" />
                  <span>Statutory Standards</span>
                </div>
                <p className="text-[11px] text-slate-500">ICAI Regulatory Compliance</p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#E7E3D9] bg-white p-2.5 sm:p-3 shadow-sm">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src="/images/hero_ca_architecture.jpg"
                  alt="Pahuja & Co. Chartered Accountants modern executive practice atmosphere in New Delhi"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 px-1">
                <span>{FIRM_DETAILS.hindiName}</span>
                <span>Janakpuri · New Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
