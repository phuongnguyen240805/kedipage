"use client";

import React from "react";
import dynamic from "next/dynamic";

// Hero (above-the-fold)
import ClientsMainVideo from "@/components/clients-section/clients-section";

// Lazy sections
const RepresentativeSection = dynamic(() => import("@/components/clients-section/representative"), { ssr: false });

const ClientsSection3 = dynamic(() => import("@/components/clients-section/clients-scrolling-testimonials/clients-scrloling3"), { ssr: false });

const ClientsTeam = dynamic(() => import("@/components/clients-section/clients-team"), { ssr: false });

const ClientsSupportTeam = dynamic(() => import("@/components/clients-section/clients-support-team"), { ssr: false });

const ClientsTrust = dynamic(() => import("@/components/clients-section/clients-trust/clients-trust"), { ssr: false });

const ClientsGetCloseSection = dynamic(() => import("@/components/clients-section/clients-getclosesection"), { ssr: false });

export default function ClientsSection() {
  return (
    <section className=" min-h-screen overflow-visible">
      <ClientsMainVideo />
      <RepresentativeSection />
      <ClientsSection3 />
      <ClientsTeam />
      <ClientsSupportTeam />

      <div className="rounded-3xl">
        <ClientsTrust />
        <ClientsGetCloseSection />
      </div>
    </section>
  );
}
