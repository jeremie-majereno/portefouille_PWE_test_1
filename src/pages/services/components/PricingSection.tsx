import { Link } from 'react-router-dom';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '1 500€',
      description: 'Parfait pour les petits projets et les startups',
      features: [
        'Design de 3-5 pages',
        '2 révisions incluses',
        'Responsive design',
        'Livraison en 2 semaines',
        'Support 30 jours'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '3 500€',
      description: 'Idéal pour les projets d\'envergure moyenne',
      features: [
        'Design de 8-12 pages',
        '4 révisions incluses',
        'Design system complet',
        'Prototypage interactif',
        'Livraison en 4 semaines',
        'Support 60 jours',
        'Formation incluse'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Sur devis',
      description: 'Pour les projets complexes et personnalisés',
      features: [
        'Nombre de pages illimité',
        'Révisions illimitées',
        'Design system avancé',
        'Intégration frontend',
        'Tests utilisateurs',
        'Support prioritaire',
        'Accompagnement dédié'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarifs Transparents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des formules adaptées à tous les budgets et tous les besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gray-900 text-white shadow-2xl scale-105'
                  : 'bg-gray-50 text-gray-900'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-gray-900 text-xs font-semibold rounded-full whitespace-nowrap">
                  Le plus populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                {plan.price !== 'Sur devis' && (
                  <div className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                    par projet
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className={`ri-check-line text-lg mt-0.5 ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}></i>
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-white/90' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block w-full py-3 text-center text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  plan.highlighted
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Commencer
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Tous les tarifs sont indicatifs. Un devis personnalisé sera établi selon vos besoins spécifiques.
          </p>
        </div>
      </div>
    </section>
  );
}
