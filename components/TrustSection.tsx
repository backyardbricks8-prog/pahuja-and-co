import React from "react";
import { Star, ShieldCheck, CheckCircle, ExternalLink, MapPin, Building2 } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firm";

export default function TrustSection() {
  return (
    <section className="w-full border-b border-[#E7E3D9] bg-[#F5F2EB]/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
            Credibility &amp; Professional Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0C1524] mt-2">
            Disciplined Practice Founded on Integrity and Accuracy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Our practice focuses on delivering precise, dependable chartered accountancy services without misleading promises or compliance shortcuts.
          </p>
        </div>

        {/* Grid of Verified Facts & Review */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Verified Google Review */}
          <div className="border border-[#E7E3D9] bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#B88E3E] text-[#B88E3E]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500">Google Review</span>
              </div>
              <blockquote className="text-base sm:text-lg font-medium text-[#0C1524] leading-snug">
                &ldquo;{FIRM_DETAILS.verifiedReview.quote}&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <div className="font-semibold text-slate-900">{FIRM_DETAILS.verifiedReview.author}</div>
                <div className="text-slate-500">Verified Client</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-[#B88E3E] tabular-nums">
                  {FIRM_DETAILS.googleRating.score.toFixed(1)} / {FIRM_DETAILS.googleRating.maxScore.toFixed(1)}
                </div>
                <div className="text-[11px] text-slate-500">6 Google reviews</div>
              </div>
            </div>
          </div>

          {/* Card 2: Regulatory & Professional Framework */}
          <div className="border border-[#E7E3D9] bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
                <ShieldCheck className="h-4 w-4 text-[#B88E3E]" />
                <span>ICAI Professional Code</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0C1524]">
                Strict Confidentiality &amp; Ethical Practice
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating under the regulatory purview of the Institute of Chartered Accountants of India. All financial papers, tax returns, and client communications remain strictly privileged.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>No data sharing or third-party disclosure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Peer-reviewed auditing procedures</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500">
              New Delhi Practice Office · Independent Review
            </div>
          </div>

          {/* Card 3: Janakpuri Office Presence */}
          <div className="border border-[#E7E3D9] bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
                <Building2 className="h-4 w-4 text-[#B88E3E]" />
                <span>Physical Office Presence</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0C1524]">
                Accessible Ground-Floor Premises
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located at C-2/271, Ground Floor in Janakpuri, New Delhi. Welcoming in-person meetings by appointment for corporate and individual compliance needs.
              </p>
              <div className="flex items-start gap-2 text-xs text-slate-700 bg-[#FAF8F5] p-3 border border-[#E7E3D9]">
                <MapPin className="h-4 w-4 text-[#B88E3E] shrink-0 mt-0.5" />
                <span>C-2/271, Ground Floor, Janakpuri, New Delhi – 110058</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={FIRM_DETAILS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C1524] hover:text-[#B88E3E] transition-colors"
              >
                <span>View Office on Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
