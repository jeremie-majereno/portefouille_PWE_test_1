import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroServices from './components/HeroServices';
import ServicesGrid from './components/ServicesGrid';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroServices />
      <ServicesGrid />
      <ProcessSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
