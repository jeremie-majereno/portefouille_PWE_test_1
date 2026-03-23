import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="https://public.readdy.ai/ai/img_res/5a784900-2a16-439b-8659-15bbfff0d4d3.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isActive('/') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/a-propos"
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isActive('/a-propos') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              À propos
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isActive('/portfolio') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isActive('/services') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              Contact
            </Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-gray-900`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-white border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  isActive('/') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Accueil
              </Link>
              <Link
                to="/a-propos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  isActive('/a-propos') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                À propos
              </Link>
              <Link
                to="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  isActive('/portfolio') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  isActive('/services') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
