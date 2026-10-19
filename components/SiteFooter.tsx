import React from "react";
import Link from "next/link";
import { FIRM_DETAILS } from "@/data/firm";
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#E7E3D9] bg-[#F5F2EB] text-slate-800">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Firm Identity */}
          <div className="space-y-4">
            <div>
              <div className="text-xl font-bold tracking-tight text-[#0C1524]">
                {FIRM_DETAILS.name}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E] mt-0.5">
                Chartered Accountants
              </div>
              <div className="text-xs text-slate-500 font-normal mt-1">
                {FIRM_DETAILS.hindiName}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              {FIRM_DETAILS.tagline} Providing disciplined accounting, statutory audit, taxation, and corporate advisory services in New Delhi.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-500">
                ICAI Regulated Practice · Janakpuri, New Delhi
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links / Practice Areas */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0C1524]">
              Practice Areas
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/services/corporate-services" className="hover:text-[#0C1524] transition-colors">
                  Corporate Services &amp; ROC
                </Link>
              </li>
              <li>
                <Link href="/services/audit-assurance" className="hover:text-[#0C1524] transition-colors">
                  Audit &amp; Assurance
                </Link>
              </li>
              <li>
                <Link href="/services/income-tax" className="hover:text-[#0C1524] transition-colors">
                  Income Tax Advisory &amp; ITR
                </Link>
              </li>
              <li>
                <Link href="/services/gst" className="hover:text-[#0C1524] transition-colors">
                  GST Returns &amp; Compliance
                </Link>
              </li>
              <li>
                <Link href="/services/accounting" className="hover:text-[#0C1524] transition-colors">
                  Accounting &amp; Financial Reporting
                </Link>
              </li>
              <li>
                <Link href="/services/payroll" className="hover:text-[#0C1524] transition-colors">
                  Payroll Processing &amp; Labour Laws
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Firm Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0C1524]">
              Office &amp; Contact
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#B88E3E] mt-0.5" />
                <span>
                  {FIRM_DETAILS.address.line1}, {FIRM_DETAILS.address.locality}, {FIRM_DETAILS.address.city}, {FIRM_DETAILS.address.state} – {FIRM_DETAILS.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#B88E3E]" />
                <div className="flex flex-col">
                  <a href={`tel:${FIRM_DETAILS.phones.office}`} className="hover:text-[#0C1524]">
                    Office: {FIRM_DETAILS.phones.officeDisplay}
                  </a>
                  <a href={`tel:${FIRM_DETAILS.phones.mobile}`} className="hover:text-[#0C1524]">
                    Mobile: {FIRM_DETAILS.phones.mobileDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#B88E3E]" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-[#0C1524] break-all">
                  {FIRM_DETAILS.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-500 pt-1">
                <Clock className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                <div>
                  <div>{FIRM_DETAILS.hours.weekdays}</div>
                  <div>{FIRM_DETAILS.hours.saturday}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Verification */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0C1524]">
              Location &amp; Review
            </div>
            <div className="border border-[#E7E3D9] bg-white p-4">
              <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                <span className="font-semibold text-slate-900">Google Verified</span>
                <span className="text-[#B88E3E] font-bold tabular-nums">4.0 / 5.0</span>
              </div>
              <p className="text-xs italic text-slate-600 border-l-2 border-[#B88E3E] pl-2 py-0.5">
                &ldquo;{FIRM_DETAILS.verifiedReview.quote}&rdquo;
              </p>
              <div className="text-[11px] text-slate-500 mt-2">
                — {FIRM_DETAILS.verifiedReview.author} · {FIRM_DETAILS.verifiedReview.source}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <a
                  href={FIRM_DETAILS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0C1524] hover:text-[#B88E3E] transition-colors"
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer (ICAI Requirement) */}
        <div className="mt-12 border-t border-[#E7E3D9] pt-8">
          <div className="flex items-start gap-3 bg-[#FAF8F5] p-4 border border-[#E7E3D9]">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#B88E3E] mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-800 font-semibold block mb-1">
                Statutory Regulatory Notice (ICAI Guidelines)
              </strong>
              As per the guidelines issued by the Institute of Chartered Accountants of India (ICAI), this website is maintained solely for informational purposes to facilitate communication and provide general awareness about the firm&apos;s practice areas. This website does not constitute an advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever to solicit work.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-[#E7E3D9]/60 pt-6">
          <div>
            &copy; {new Date().getFullYear()} {FIRM_DETAILS.name} All rights reserved. Janakpuri, New Delhi, India.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-900 transition-colors">
              Legal Disclaimer
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
