import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://public.readdy.ai/ai/img_res/5a784900-2a16-439b-8659-15bbfff0d4d3.png"
              alt="Logo"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Designer UI/UX passionné par la création d'expériences digitales exceptionnelles. 
              Transformons ensemble vos idées en réalité visuelle.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@designer.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                  contact@designer.com
                </a>
              </li>
              <li>
                <a href="tel:+33612345678" className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                  +33 6 12 34 56 78
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
                <i className="ri-dribbble-line text-base"></i>
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
                <i className="ri-behance-line text-base"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-base"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-base"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Portfolio Designer. Tous droits réservés.
          </p>
          <a 
            href="https://readdy.ai/?ref=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
}
