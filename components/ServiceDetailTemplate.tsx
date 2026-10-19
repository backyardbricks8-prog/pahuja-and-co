"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import { INSIGHTS_DATA } from "@/data/insights";
import EnquiryForm from "@/components/EnquiryForm";
import { FIRM_DETAILS } from "@/data/firm";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  BookOpen,
  ChevronDown,
  ArrowRight,
  Phone,
  HelpCircle,
  FileText
} from "lucide-react";

interface Props {
  service: ServiceItem;
}

export default function ServiceDetailTemplate({ service }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Retrieve related insights for internal linking
  const relatedArticles = INSIGHTS_DATA.filter((article) =>
    service.relatedInsightSlugs.includes(article.slug)
  );

  // Schema.org Service & FAQPage Structured Data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.title} - Pahuja & Co. Chartered Accountants`,
    "provider": {
      "@type": "AccountingService",
      "name": "Pahuja & Co. Chartered Accountants",
      "telephone": FIRM_DETAILS.phones.officeDisplay,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": FIRM_DETAILS.address.line1,
        "addressLocality": FIRM_DETAILS.address.locality,
        "addressRegion": FIRM_DETAILS.address.state,
        "postalCode": FIRM_DETAILS.address.pincode,
        "addressCountry": "IN"
      }
    },
    "description": service.shortSummary,
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.deliverables.map((item, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item
        }
      }))
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.serviceFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header & Breadcrumbs */}
      <section className="border-b border-[#E7E3D9] bg-[#F5F2EB]/60 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-slate-900 transition-colors">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-slate-900">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#B88E3E]">
                {service.number}.
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Pahuja &amp; Co. Practice Area
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1524] mt-3">
              {service.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.shortSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 lg:py-24 border-b border-[#E7E3D9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column (7 cols): Full Service Depth */}
            <div className="lg:col-span-7 space-y-12">
              {/* Scope Overview */}
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
                  Practice Scope
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-[#0C1524]">
                  Regulatory Overview &amp; Execution
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {service.fullDescription}
                </p>
                <div className="p-4 bg-white border border-[#E7E3D9] text-xs text-slate-700">
                  <strong className="text-slate-900 block mb-1">Target Entities &amp; Professionals:</strong>
                  {service.targetAudience}
                </div>
              </div>

              {/* 1. Client Problems We Address */}
              <div className="space-y-4 border-t border-[#E7E3D9] pt-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-900">
                  <AlertTriangle className="h-4 w-4 text-rose-600" />
                  <span>Critical Client Risks &amp; Non-Compliance Problems</span>
                </div>
                <h3 className="text-xl font-bold text-[#0C1524]">
                  Challenges Faced Without Structured Compliance
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {service.clientProblems.map((problem, idx) => (
                    <div key={idx} className="border border-[#E7E3D9] bg-white p-4 text-xs sm:text-sm text-slate-700">
                      <div className="flex items-start gap-2.5">
                        <span className="text-rose-600 font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{problem}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Solutions Provided by Pahuja & Co. */}
              <div className="space-y-4 border-t border-[#E7E3D9] pt-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
                  <Sparkles className="h-4 w-4 text-[#B88E3E]" />
                  <span>How Pahuja &amp; Co. Solves It</span>
                </div>
                <h3 className="text-xl font-bold text-[#0C1524]">
                  Structured Methodology &amp; Partner Oversight
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {service.solutions.map((sol, idx) => (
                    <div key={idx} className="border border-[#E7E3D9] bg-white p-4 text-xs sm:text-sm text-slate-700">
                      <div className="flex items-start gap-2.5">
                        <span className="font-mono text-xs font-bold text-[#B88E3E] mt-0.5">
                          {idx + 1}.
                        </span>
                        <span className="leading-relaxed">{sol}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Tangible Business Benefits */}
              <div className="space-y-4 border-t border-[#E7E3D9] pt-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Tangible Business &amp; Statutory Benefits</span>
                </div>
                <h3 className="text-xl font-bold text-[#0C1524]">
                  Measurable Outcomes for Your Practice
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.tangibleBenefits.map((benefit, idx) => (
                    <div key={idx} className="border border-[#E7E3D9] bg-[#FAF8F5] p-3.5 text-xs text-slate-800 flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Concrete Scope of Deliverables */}
              <div className="space-y-4 border-t border-[#E7E3D9] pt-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900">
                  <FileText className="h-4 w-4 text-slate-700" />
                  <span>Specific Deliverables &amp; Filing Cycles</span>
                </div>
                <h3 className="text-xl font-bold text-[#0C1524]">
                  Scope of Work Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="border border-[#E7E3D9] bg-white p-3.5 text-xs text-slate-800 flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-none bg-[#B88E3E] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Specific FAQs for this Service */}
              <div className="space-y-4 border-t border-[#E7E3D9] pt-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
                  <HelpCircle className="h-4 w-4 text-[#B88E3E]" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h3 className="text-xl font-bold text-[#0C1524]">
                  Key Queries Regarding {service.title}
                </h3>
                <div className="space-y-3">
                  {service.serviceFaqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="border border-[#E7E3D9] bg-white">
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88E3E]"
                        >
                          <span className="text-xs sm:text-sm font-bold text-[#0C1524]">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                              isOpen ? "rotate-180 text-[#B88E3E]" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 6. Related Insights & Guides (Deep Internal Links) */}
              {relatedArticles.length > 0 && (
                <div className="space-y-4 border-t border-[#E7E3D9] pt-8">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                    <BookOpen className="h-4 w-4 text-[#B88E3E]" />
                    <span>Related Knowledge Centre Guides</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedArticles.map((art) => (
                      <Link
                        key={art.slug}
                        href={`/insights/${art.slug}`}
                        className="group border border-[#E7E3D9] bg-white p-4 transition-all hover:border-[#0C1524] hover:shadow-xs block"
                      >
                        <div className="text-[11px] font-semibold text-[#B88E3E] uppercase">
                          {art.category} · {art.readTime}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0C1524] group-hover:text-[#B88E3E] transition-colors mt-1">
                          {art.title}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500 mt-2">
                          <span>Read Article</span>
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (5 cols): Consultation Enquiry & Quick Contact */}
            <div className="lg:col-span-5 space-y-6">
              <EnquiryForm initialService={service.title} />

              {/* Direct Office Lines */}
              <div className="border border-[#E7E3D9] bg-[#F5F2EB] p-5 text-xs text-slate-700 space-y-3">
                <div className="font-bold text-[#0C1524] uppercase tracking-wider text-[11px]">
                  Direct Chartered Accountant Access
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Call our Janakpuri office directly to speak with our professional team regarding your {service.title.toLowerCase()} requirement.
                </p>
                <div className="pt-2 flex flex-col gap-1.5 font-medium">
                  <a
                    href={`tel:${FIRM_DETAILS.phones.office}`}
                    className="flex items-center gap-2 text-[#0C1524] hover:text-[#B88E3E]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#B88E3E]" />
                    <span>Office: {FIRM_DETAILS.phones.officeDisplay}</span>
                  </a>
                  <a
                    href={`tel:${FIRM_DETAILS.phones.mobile}`}
                    className="flex items-center gap-2 text-[#0C1524] hover:text-[#B88E3E]"
                  >
                    <Phone className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Mobile: {FIRM_DETAILS.phones.mobileDisplay}</span>
                  </a>
                </div>
                <div className="pt-2 border-t border-[#E7E3D9] text-[11px] text-slate-500">
                  Office Location: {FIRM_DETAILS.address.full}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to All Services navigation strip */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-slate-600 hover:text-[#0C1524]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>View All Practice Areas</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-[#B88E3E] hover:underline"
          >
            <span>Book In-Person Appointment</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
