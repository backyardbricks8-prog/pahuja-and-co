import React from "react";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import { FIRM_DETAILS } from "@/data/firm";
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact & Book Consultation | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "Schedule an accounting, tax, or audit consultation with Pahuja & Co. Chartered Accountants. Office: C-2/271, Ground Floor, Janakpuri, New Delhi. Phone: +91 11 4562 6500.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="border-b border-[#E7E3D9] bg-[#F5F2EB]/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-slate-900">Contact &amp; Consultation</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
              Connect With Our Practice
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1524] mt-3">
              Book a Consultation or Visit Our Office
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Have a tax inquiry, pending department notice, or looking for recurring corporate accounting and audit services? Connect with our senior team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Interactive Form */}
      <section className="py-16 lg:py-24 border-b border-[#E7E3D9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Contact & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-[#E7E3D9] bg-white p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0C1524]">
                    Office Information
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {FIRM_DETAILS.hindiName}
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="h-5 w-5 text-[#B88E3E] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Janakpuri Office Address
                    </div>
                    <div className="text-sm font-semibold text-[#0C1524] mt-1">
                      {FIRM_DETAILS.name}
                    </div>
                    <div className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                      {FIRM_DETAILS.address.full}
                    </div>
                    <a
                      href={FIRM_DETAILS.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B88E3E] hover:underline mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="border-t border-slate-100 pt-5 flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#B88E3E] shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Direct Telephones
                    </div>
                    <div className="text-sm text-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 text-xs">Office Line:</span>
                        <a
                          href={`tel:${FIRM_DETAILS.phones.office}`}
                          className="font-semibold hover:text-[#B88E3E] transition-colors"
                        >
                          {FIRM_DETAILS.phones.officeDisplay}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-slate-500 text-xs">Mobile / Direct CA:</span>
                        <a
                          href={`tel:${FIRM_DETAILS.phones.mobile}`}
                          className="font-semibold hover:text-[#B88E3E] transition-colors"
                        >
                          {FIRM_DETAILS.phones.mobileDisplay}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="border-t border-slate-100 pt-5 flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#B88E3E] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Official Firm Email
                    </div>
                    <a
                      href={`mailto:${FIRM_DETAILS.email}`}
                      className="text-sm font-semibold text-[#0C1524] hover:text-[#B88E3E] transition-colors break-all block mt-1"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="border-t border-slate-100 pt-5 flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      WhatsApp Messaging
                    </div>
                    <a
                      href={FIRM_DETAILS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline mt-1"
                    >
                      <span>Message on WhatsApp ({FIRM_DETAILS.phones.mobileDisplay})</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="border-t border-slate-100 pt-5 flex items-start gap-3">
                  <Clock className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600 space-y-0.5">
                    <div className="font-semibold text-slate-800">Operating Hours</div>
                    <div>{FIRM_DETAILS.hours.weekdays}</div>
                    <div>{FIRM_DETAILS.hours.saturday}</div>
                    <div className="text-slate-400">{FIRM_DETAILS.hours.sunday}</div>
                  </div>
                </div>
              </div>

              {/* Data Minimisation & Ethical Notice */}
              <div className="border border-[#E7E3D9] bg-[#FAF8F5] p-5 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#0C1524]">
                  <ShieldCheck className="h-4 w-4 text-[#B88E3E]" />
                  <span>Confidentiality &amp; Data Safeguards</span>
                </div>
                <p className="leading-relaxed">
                  We maintain strict client confidentiality. Please do not submit bank account passwords, NetBanking PINs, or Aadhaar OTPs through our public website form. Such details will only be requested securely during formal professional onboarding.
                </p>
              </div>
            </div>

            {/* Right Column: Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Representation */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border border-[#E7E3D9] bg-[#F5F2EB] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#B88E3E]">
                Directions to Office
              </div>
              <h3 className="text-lg font-bold text-[#0C1524]">
                Convenient Ground Floor Access in Janakpuri, West Delhi
              </h3>
              <p className="text-xs text-slate-600">
                Well connected via Delhi Metro Blue Line (Janakpuri West / Janakpuri East stations) and Ring Road.
              </p>
            </div>
            <a
              href={FIRM_DETAILS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#0C1524] bg-[#0C1524] px-6 py-3 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#1E293B] shrink-0"
            >
              <span>Get Live Navigation</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
