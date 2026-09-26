import HeroSlider from '@/components/orix/HeroSlider';
import WelcomeSection from '@/components/orix/WelcomeSection';
import ConcernsOverview from '@/components/orix/ConcernsOverview';
import CoreStrengths from '@/components/orix/CoreStrengths';
import ComplianceSection from '@/components/orix/ComplianceSection';

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
