import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import FeaturedProjects from './components/FeaturedProjects';
import TestimonialsSection from './components/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
