export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Découverte',
      description: 'Analyse de vos besoins, objectifs et contraintes. Étude de votre marché et de vos utilisateurs cibles.',
      icon: 'ri-search-line'
    },
    {
      number: '02',
      title: 'Stratégie',
      description: 'Définition de la direction créative et de l\'architecture de l\'information. Création de wireframes et prototypes.',
      icon: 'ri-lightbulb-line'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Conception des interfaces visuelles avec attention aux détails. Création du design system et des composants.',
      icon: 'ri-pencil-ruler-2-line'
    },
    {
      number: '04',
      title: 'Développement',
      description: 'Intégration frontend avec les meilleures pratiques. Code propre, performant et maintenable.',
      icon: 'ri-code-box-line'
    },
    {
      number: '05',
      title: 'Tests',
      description: 'Tests utilisateurs et optimisations. Validation de l\'expérience sur tous les devices et navigateurs.',
      icon: 'ri-test-tube-line'
    },
    {
      number: '06',
      title: 'Livraison',
      description: 'Mise en ligne et formation. Support continu et accompagnement pour garantir votre succès.',
      icon: 'ri-rocket-line'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mon Processus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour garantir le succès de vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl font-bold text-gray-200">
                  {step.number}
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-lg mt-1">
                  <i className={`${step.icon} text-xl`}></i>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
