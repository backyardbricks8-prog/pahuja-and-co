import React from "react";
import { SERVICES_DATA } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { notFound } from "next/navigation";

export const metadata = {
  title: "GST Services & Filing | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "GST registration, monthly GSTR-1 and GSTR-3B filings, input tax credit reconciliation with GSTR-2B, annual returns GSTR-9, and GST notice advisory.",
};

export default function GstServicesPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "gst");
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
