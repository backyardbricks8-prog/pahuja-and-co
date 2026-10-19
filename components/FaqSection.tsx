"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS_DATA } from "@/data/faqs";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full border-b border-[#E7E3D9] bg-[#FAF8F5] py-16 lg:py-24" id="faqs">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Client Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0C1524] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Common queries regarding engagement process, documents, timelines, and confidentiality.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#E7E3D9] bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E]"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0C1524]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#B88E3E]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 text-center text-xs text-slate-500">
          Have an unlisted enquiry regarding specific company notices or audits?{" "}
          <a href="/contact" className="text-[#0C1524] font-semibold underline hover:text-[#B88E3E]">
            Contact our office directly.
          </a>
        </div>
      </div>
    </section>
  );
}
