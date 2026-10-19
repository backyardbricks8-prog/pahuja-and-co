import React from "react";
import { SERVICES_DATA } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Accounting & Bookkeeping Services | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "Professional double-entry bookkeeping, cloud accounting, MIS reporting, financial statement preparation under AS/Ind AS for Indian businesses.",
};

export default function AccountingPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "accounting");
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
