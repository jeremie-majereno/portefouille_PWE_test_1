import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroAbout from './components/HeroAbout';
import BioSection from './components/BioSection';
import ToolsSection from './components/ToolsSection';
import ExperienceSection from './components/ExperienceSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroAbout />
      <BioSection />
      <ToolsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}
