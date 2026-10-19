"use client";

import React from "react";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firm";

export default function FloatingContactBar() {
  return (
    <aside
      aria-label="Quick Contact Bar"
      className="fixed bottom-0 left-0 right-0 z-40 block md:hidden border-t border-[#E7E3D9] bg-[#FAF8F5]/98 backdrop-blur-md px-2 py-2 shadow-lg"
    >
      <div className="grid grid-cols-4 gap-1 text-center">
        {/* Call Office */}
        <a
          href={`tel:${FIRM_DETAILS.phones.office}`}
          className="flex flex-col items-center justify-center py-1 text-[10px] font-semibold text-slate-800 hover:text-[#0C1524] active:bg-[#E7E3D9]/40"
        >
          <Phone className="h-4 w-4 text-[#B88E3E]" />
          <span className="mt-0.5 truncate">Office</span>
        </a>

        {/* Call Mobile */}
        <a
          href={`tel:${FIRM_DETAILS.phones.mobile}`}
          className="flex flex-col items-center justify-center py-1 text-[10px] font-semibold text-slate-800 hover:text-[#0C1524] active:bg-[#E7E3D9]/40"
        >
          <Phone className="h-4 w-4 text-emerald-600" />
          <span className="mt-0.5 truncate">Direct CA</span>
        </a>

        {/* WhatsApp */}
        <a
          href={FIRM_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[10px] font-semibold text-slate-800 hover:text-[#0C1524] active:bg-[#E7E3D9]/40"
        >
          <MessageCircle className="h-4 w-4 text-emerald-600" />
          <span className="mt-0.5 truncate">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={FIRM_DETAILS.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[10px] font-semibold text-slate-800 hover:text-[#0C1524] active:bg-[#E7E3D9]/40"
        >
          <MapPin className="h-4 w-4 text-[#B88E3E]" />
          <span className="mt-0.5 truncate">Directions</span>
        </a>
      </div>
    </aside>
  );
}
