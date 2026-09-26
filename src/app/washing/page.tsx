/* eslint-disable @typescript-eslint/no-explicit-any */

import WashingHero from '@/components/washing/WashingHero';
import WashingGallery from '@/components/washing/WashingGallery';
import MachineryGrid from '@/components/washing/MachineryGrid';
import ProcessSteps from '@/components/washing/ProcessSteps';
import EcoImpactMetrics from '@/components/washing/EcoImpactMetrics';
import ServiceDetailGrid from '@/components/washing/ServiceDetailGrid';
import TechSpecsTable from '@/components/washing/TechSpecsTable';
import CertificationsGrid from '@/components/washing/CertificationsGrid';
import WashingBuyerLogos from '@/components/washing/WashingBuyerLogos';
import TestimonialsSection from '@/components/washing/TestimonialsSection';
import FaqSection from '@/components/washing/FaqSection';
import CtaBanner from '@/components/shared/CtaBanner';

import {
  washingGallery,
  washingMachinery,
  washingEcoMetrics,
  washingServices,
  washingSpecs,
  washingCertifications,
  washingBuyers,
  washingTestimonials,
  dryProcessData,
  wetProcessData,
} from '@/components/washing/washingData';

export default function WashingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Full-width Hero Slider */}
      <WashingHero />

      {/* Main Content Container */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        {/* Gallery Section */}
        <WashingGallery gallery={washingGallery} />

        {/* Certifications & Compliance */}
        <CertificationsGrid certifications={washingCertifications} />

        {/* Eco Impact & Sustainability Metrics */}
        <EcoImpactMetrics metrics={washingEcoMetrics} />

        {/* Machinery & Technology Lineup */}
        <MachineryGrid machinery={washingMachinery} />

        {/* Specialized Services */}
        <ServiceDetailGrid services={washingServices as any} />

        {/* Advanced Dry Processing Unit */}
        <ProcessSteps
          badge="Dry Processing"
          title={dryProcessData.title || 'Advanced Dry Processing Unit'}
          subtitle={dryProcessData.subtitle}
          steps={dryProcessData.steps}
        />

        {/* Advanced Wet Processing Unit */}
        <ProcessSteps
          badge="Wet Processing"
          title={wetProcessData.title || 'Advanced Wet Processing Unit'}
          subtitle={wetProcessData.subtitle}
          steps={wetProcessData.steps}
        />

        {/* Plant Specifications */}
        <TechSpecsTable specs={washingSpecs as Record<string, any>} />

        {/* Global Buyers & Partners */}
        <WashingBuyerLogos buyers={washingBuyers} />

        {/* Client Testimonials */}
        <TestimonialsSection testimonials={washingTestimonials} />

        {/* FAQ Section */}
        <FaqSection />

        {/* CTA Banner */}
        <CtaBanner />
      </div>
    </div>
  );
}
