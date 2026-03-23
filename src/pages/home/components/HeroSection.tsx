import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://readdy.ai/api/search-image?query=minimalist%20abstract%20geometric%20shapes%20in%20soft%20pastel%20colors%20with%20clean%20lines%20and%20modern%20design%20aesthetic%20perfect%20for%20creative%20portfolio%20background%20with%20plenty%20of%20negative%20space%20and%20subtle%20gradients%20creating%20a%20professional%20and%20artistic%20atmosphere&width=1920&height=1080&seq=hero-bg-001&orientation=landscape)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/40"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Designer UI/UX
            <br />
            <span className="text-gray-600">Créateur d'expériences</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Je transforme vos idées en interfaces élégantes et intuitives. 
            Spécialisé en design web, mobile et branding pour créer des expériences digitales mémorables.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-gray-900 text-sm font-medium rounded-full border-2 border-gray-900 hover:bg-gray-50 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Me contacter
            </Link>
          </div>

          <div className="mt-20 flex items-center justify-center gap-12 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-sm text-gray-600">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-gray-900"></i>
      </div>
    </section>
  );
}
