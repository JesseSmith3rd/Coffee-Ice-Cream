import HeroSection from '@/components/home/HeroSection';
import AtmosphereSection from '@/components/home/AtmosphereSection';
import OfferingsShowcase from '@/components/home/OfferingsShowcase';
import StorySection from '@/components/home/StorySection';
import HoursLocationCard from '@/components/home/HoursLocationCard';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div id="offerings">
        <OfferingsShowcase />
      </div>
      <AtmosphereSection />
      <StorySection />
      <HoursLocationCard />
      <TestimonialsSection />
    </>
  );
}
