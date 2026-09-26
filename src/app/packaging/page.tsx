/* eslint-disable @typescript-eslint/no-explicit-any */
import PackagingHero from '@/components/packaging/PackagingHero';
import PackagingGallery from '@/components/packaging/PackagingGallery';
import PackagingMachineryGrid from '@/components/packaging/PackagingMachineryGrid';
import PackagingEcoMetrics from '@/components/packaging/PackagingEcoMetrics';
import PackagingTechSpecsTable from '@/components/packaging/PackagingTechSpecsTable';
import CertificationsGrid from '@/components/washing/CertificationsGrid'; // Common shared or make PackagingCertifications
import ServiceDetailGrid from '@/components/washing/ServiceDetailGrid';
import ProcessSteps from '@/components/washing/ProcessSteps';
import PackagingBuyerLogos from '@/components/packaging/PackagingBuyerLogos';
import TestimonialsSection from '@/components/washing/TestimonialsSection';
import FaqSection from '@/components/washing/FaqSection';
import CtaBanner from '@/components/shared/CtaBanner';

import {
  packagingGallery,
  packagingMachinery,
  packagingEcoMetrics,
  packagingServices,
  packagingSpecs,
  packagingCertifications,
  packagingBuyers,
  packagingTestimonials,
  dryProcessData,
  wetProcessData,
} from '@/components/packaging/packagingData';

export default function PackagingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <PackagingHero />

      <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <PackagingGallery gallery={packagingGallery} />
        <CertificationsGrid certifications={packagingCertifications as any} />
        <PackagingEcoMetrics metrics={packagingEcoMetrics} />
        <PackagingMachineryGrid machinery={packagingMachinery} />
        <ServiceDetailGrid services={packagingServices as any} />
        <ProcessSteps
          badge="Pre-Press Unit"
          title={dryProcessData.title}
          subtitle={dryProcessData.subtitle}
          steps={dryProcessData.steps}
        />
        <ProcessSteps
          badge="Finishing Unit"
          title={wetProcessData.title}
          subtitle={wetProcessData.subtitle}
          steps={wetProcessData.steps}
        />
        <PackagingTechSpecsTable specs={packagingSpecs} />
        <PackagingBuyerLogos buyers={packagingBuyers} />
        <TestimonialsSection testimonials={packagingTestimonials as any} />
        <FaqSection />
        <CtaBanner />
      </div>
    </div>
  );
}
