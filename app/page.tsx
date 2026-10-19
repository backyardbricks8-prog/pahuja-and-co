import React from "react";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesOverview from "@/components/ServicesOverview";
import AboutFirmSection from "@/components/AboutFirmSection";
import InsightsPreview from "@/components/InsightsPreview";
import FaqSection from "@/components/FaqSection";
import EnquiryForm from "@/components/EnquiryForm";
import { FIRM_DETAILS } from "@/data/firm";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust and Credibility Section */}
      <TrustSection />

      {/* 3. Services Overview with Elegant Cards */}
      <ServicesOverview />

      {/* 4. About the Firm & Why Choose Pahuja & Co. */}
      <AboutFirmSection />

      {/* 5. Editorial Still-Life & Practice Atmosphere Banner */}
      <section className="w-full border-b border-[#E7E3D9] bg-[#F5F2EB] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
                Analytical Precision
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#0C1524] mt-2">
                Every Figure Verified. Every Return Reconciled.
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether analyzing multi-year tax assessments, conducting statutory audits, or configuring double-entry accounting ledgers, our team adheres to uncompromising standards of scrutiny and accuracy.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#E7E3D9] bg-white p-2">
                <div className="relative h-full w-full bg-stone-100">
                  <Image
                    src="/images/audit_analytical_desk.jpg"
                    alt="Pahuja & Co. meticulous financial audit documentation and review"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-[#E7E3D9] bg-white p-2">
                <div className="relative h-full w-full bg-stone-100">
                  <Image
                    src="/images/delhi_office_building.jpg"
                    alt="Pahuja & Co. prestigious office location in New Delhi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Knowledge Centre / Insights */}
      <InsightsPreview />

      {/* 7. Frequently Asked Questions */}
      <FaqSection />

      {/* 8. Contact & Consultation Section */}
      <section className="w-full border-b border-[#E7E3D9] bg-[#FAF8F5] py-16 lg:py-24" id="consultation">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Contact & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
                  Connect Directly
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#0C1524] mt-2">
                  Visit Our New Delhi Office or Schedule a Call
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  We welcome initial inquiries from businesses seeking ongoing compliance or specific tax and audit advice.
                </p>
              </div>

              {/* Verified Contact Card */}
              <div className="border border-[#E7E3D9] bg-white p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#B88E3E] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Firm Address
                    </div>
                    <div className="text-sm font-semibold text-[#0C1524] mt-0.5">
                      {FIRM_DETAILS.name}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      {FIRM_DETAILS.address.full}
                    </div>
                    <a
                      href={FIRM_DETAILS.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#B88E3E] hover:underline mt-2"
                    >
                      <span>Get Map Directions</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#B88E3E] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Telephone Lines
                    </div>
                    <div className="text-sm text-slate-800 mt-1 space-y-1">
                      <div>
                        Office:{" "}
                        <a href={`tel:${FIRM_DETAILS.phones.office}`} className="font-semibold hover:text-[#B88E3E]">
                          {FIRM_DETAILS.phones.officeDisplay}
                        </a>
                      </div>
                      <div>
                        Mobile:{" "}
                        <a href={`tel:${FIRM_DETAILS.phones.mobile}`} className="font-semibold hover:text-[#B88E3E]">
                          {FIRM_DETAILS.phones.mobileDisplay}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#B88E3E] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Official Email
                    </div>
                    <a
                      href={`mailto:${FIRM_DETAILS.email}`}
                      className="text-sm font-semibold text-[#0C1524] hover:text-[#B88E3E] break-all block mt-0.5"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-start gap-3">
                  <Clock className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600">
                    <div className="font-semibold text-slate-800">Office Working Hours</div>
                    <div className="mt-1">{FIRM_DETAILS.hours.weekdays}</div>
                    <div>{FIRM_DETAILS.hours.saturday}</div>
                    <div className="text-slate-400">{FIRM_DETAILS.hours.sunday}</div>
                  </div>
                </div>
              </div>

              {/* ICAI Notice */}
              <div className="flex items-start gap-3 p-4 bg-[#F5F2EB] border border-[#E7E3D9] text-xs text-slate-600">
                <ShieldCheck className="h-4 w-4 text-[#B88E3E] shrink-0 mt-0.5" />
                <span>
                  All consultations adhere to professional ICAI norms. No advance fee is solicited prior to formal engagement scope definition.
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
