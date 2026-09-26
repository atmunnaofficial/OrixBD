import HeroSlider from '@/components/orixbd/HeroSlider';
import WelcomeSection from '@/components/orixbd/WelcomeSection';
import ConcernsOverview from '@/components/orixbd/ConcernsOverview';
import CoreStrengths from '@/components/orixbd/CoreStrengths';
import ComplianceSection from '@/components/orixbd/ComplianceSection';

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <HeroSlider />
      <WelcomeSection />
      <ConcernsOverview />
      <CoreStrengths />
      <ComplianceSection />
    </div>
  );
}
