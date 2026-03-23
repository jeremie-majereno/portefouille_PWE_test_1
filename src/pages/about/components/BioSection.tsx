export default function BioSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Créer des expériences qui inspirent
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Bonjour ! Je suis un designer UI/UX passionné avec plus de 5 ans d'expérience dans la création d'interfaces digitales élégantes et fonctionnelles. Mon approche combine esthétique visuelle et recherche utilisateur pour créer des expériences qui résonnent vraiment avec les utilisateurs.
              </p>
              <p>
                Diplômé en design graphique et spécialisé en expérience utilisateur, j'ai eu la chance de travailler avec des startups innovantes, des agences créatives et des entreprises établies. Chaque projet est une opportunité d'apprendre, d'innover et de repousser les limites du design.
              </p>
              <p>
                Ma philosophie est simple : le bon design est invisible. Il guide naturellement l'utilisateur, anticipe ses besoins et crée une connexion émotionnelle avec le produit. C'est cette vision qui anime chacun de mes projets.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/cv-designer.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-download-line text-base"></i>
                Télécharger mon CV
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20creative%20designer%20portrait%20in%20modern%20minimalist%20studio%20workspace%20natural%20lighting%20confident%20pose%20working%20on%20design%20projects%20clean%20aesthetic%20contemporary%20setting&width=600&height=800&seq=about-portrait-001&orientation=portrait"
                  alt="Designer Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-900 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
