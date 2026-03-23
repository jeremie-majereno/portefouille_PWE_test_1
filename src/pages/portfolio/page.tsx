import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ProjectsGrid from './components/ProjectsGrid';
import FilterBar from './components/FilterBar';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez mes projets de design UI/UX, branding et web
            </p>
          </div>
        </div>
      </section>

      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <ProjectsGrid activeFilter={activeFilter} />
      
      <Footer />
    </div>
  );
}
