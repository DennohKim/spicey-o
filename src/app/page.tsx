"use client";
import React from "react";
import {
  AppCtaSection,
  FeatureSection,
  Header,
  HeroSection,
  ContactUsSection,
  ProductCarousel,
  FaqsSection,
  // AboutSpiceyoSection,
  Footer,
} from "@/components/landing-page-sections";

// Main Home Page Component
export default function HomePage() {
  return (
    <div className="bg-[#F8F5F0] antialiased">
      <main className="m-6">
        <Header />
        <HeroSection />
        <FeatureSection />
        {/* <AboutSpiceyoSection /> */}
        <ProductCarousel />
        <AppCtaSection />
        <FaqsSection />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}
