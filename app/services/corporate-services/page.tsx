import React from "react";
import { SERVICES_DATA } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Corporate Services & ROC Compliance | Pahuja & Co. Chartered Accountants",
  description:
    "Company incorporation, MCA filings, annual ROC compliance (AOC-4, MGT-7), director KYC, and corporate advisory services in New Delhi.",
};

export default function CorporateServicesPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "corporate-services");
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
