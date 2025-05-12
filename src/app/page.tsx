import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
