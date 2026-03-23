import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Prêt à Démarrer Votre Projet ?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Discutons de vos besoins et créons ensemble quelque chose d'exceptionnel. 
          Je suis là pour transformer vos idées en réalité.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Demander un devis
          </Link>
          <Link
            to="/portfolio"
            className="px-8 py-4 bg-white text-gray-900 text-sm font-medium rounded-full border-2 border-gray-900 hover:bg-gray-50 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Voir le portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
