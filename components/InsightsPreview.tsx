import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { INSIGHTS_DATA } from "@/data/insights";

export default function InsightsPreview() {
  const featuredArticles = INSIGHTS_DATA.slice(0, 3);

  return (
    <section className="w-full border-b border-[#E7E3D9] bg-[#F5F2EB]/50 py-16 lg:py-24" id="insights">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E7E3D9] pb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
              Knowledge Centre &amp; Regulatory Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0C1524] mt-2">
              Statutory Insights for Decision Makers
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0C1524] hover:text-[#B88E3E] transition-colors"
          >
            <span>View All Knowledge Articles</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between border border-[#E7E3D9] bg-white p-7 transition-all duration-300 hover:border-slate-400 hover:shadow-sm"
            >
              <div>
                {/* Clean unboxed metadata with typographic separators (Zero-Pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-[#B88E3E] font-medium mb-3">
                  <span>{article.category}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 text-slate-500 font-normal">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[#0C1524] leading-snug hover:text-[#B88E3E] transition-colors">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <span>{article.publishedDate}</span>
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="font-semibold text-[#0C1524] hover:text-[#B88E3E] inline-flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
