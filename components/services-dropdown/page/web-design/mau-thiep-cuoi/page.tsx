"use client";
import HeaderLove from "./container/header-Love";
import FeaturesSection from "./container/FeaturesSection";
import JourneySection from "./container/JourneySection";
import RSVPFooter from "./container/RSVPFooter";

export default function ThiepcuoiPage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#0B2D5B]">
      <HeaderLove /> 
      <JourneySection />
      <FeaturesSection/>
      <RSVPFooter/>
    </main>
  );
}
