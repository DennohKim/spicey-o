

"use client"
import React, { useState } from 'react';
import { AppCtaSection, FeatureSection, Header, HeroSection, ContactUsSection, ProductCarousel, FaqsSection, WheatSection, Footer } from '@/components/landing-page-sections';


// Main App Component
export default function App() {
  return (
    <div className="bg-[#F8F5F0] antialiased">

  
        <main className="m-6">
        <Header />

            <HeroSection />
            <FeatureSection />
            <WheatSection />
            <ProductCarousel />
            <AppCtaSection />
            <FaqsSection />
            <ContactUsSection />
        </main>
        <Footer />
      </div>
    
  );
}
