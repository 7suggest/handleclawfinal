"use client";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import ProcessSection from "@/app/components/ProcessSection";
import ServicesSection from "@/app/components/ServicesSection";
import AiCapabilitiesSection from "@/app/components/AiCapabilitiesSection";
import BuiltForSection from "@/app/components/BuiltForSection";
import WorksWithSection from "@/app/components/WorksWithSection";
import ComparisonSection from "@/app/components/ComparisonSection";

import UseCasesSection from "@/app/components/UseCasesSection";
import PricingSection from "@/app/components/PricingSection";
import WallOfLoveSection from "@/app/components/WallOfLoveSection";
import LocationsSection from "@/app/components/LocationsSection";
import FaqSection from "@/app/components/FaqSection";
import Footer from "@/app/components/Footer";
import { AuthModalProvider } from "@/app/components/AuthModalContext";
import AuthModal from "@/app/components/AuthModal";

export default function Home() {
  return (
    <AuthModalProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ComparisonSection />
        <AiCapabilitiesSection />
        <ProcessSection />
        <ServicesSection />
        <BuiltForSection />
        <WorksWithSection />

        <UseCasesSection />
        <PricingSection />
        <WallOfLoveSection />
        <FaqSection />
        <LocationsSection />
      </main>
      <Footer />
      <AuthModal />
    </AuthModalProvider>
  );
}
