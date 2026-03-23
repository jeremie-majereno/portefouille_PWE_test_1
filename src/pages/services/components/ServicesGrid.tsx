import { Link } from 'react-router-dom';

export default function ServicesGrid() {
  const services = [
    {
      slug: 'ui-ux-design',
      icon: 'ri-palette-line',
      title: 'Design UI/UX',
      description: 'Création d\'interfaces utilisateur intuitives et esthétiques. Je conçois des expériences digitales centrées sur l\'utilisateur avec une attention particulière aux détails visuels et à l\'ergonomie.',
      features: ['Wireframing & Prototypage', 'Design System', 'Tests Utilisateurs', 'Responsive Design']
    },
    {
      slug: 'design-mobile',
      icon: 'ri-smartphone-line',
      title: 'Design Mobile',
      description: 'Applications mobiles natives et hybrides pour iOS et Android. Design adapté aux spécificités mobiles avec une expérience fluide et des interactions naturelles.',
      features: ['Applications iOS', 'Applications Android', 'Progressive Web Apps', 'Design Adaptatif']
    },
    {
      slug: 'design-web',
      icon: 'ri-window-line',
      title: 'Design Web',
      description: 'Sites web modernes et performants. De la landing page au site e-commerce, je crée des interfaces web qui convertissent et engagent vos visiteurs.',
      features: ['Sites Vitrines', 'E-commerce', 'Landing Pages', 'Dashboards']
    },
    {
      slug: 'branding',
      icon: 'ri-brush-line',
      title: 'Branding & Identité',
      description: 'Création d\'identités visuelles fortes et mémorables. Logo, charte graphique, supports de communication pour construire une image de marque cohérente.',
      features: ['Création de Logo', 'Charte Graphique', 'Brand Guidelines', 'Supports Print']
    },
    {
      slug: 'integration-frontend',
      icon: 'ri-code-s-slash-line',
      title: 'Intégration Frontend',
      description: 'Développement frontend avec les dernières technologies. Transformation de vos designs en code propre, performant et maintenable.',
      features: ['React & Next.js', 'Vue.js', 'Tailwind CSS', 'Animations']
    },
    {
      slug: 'conseil-audit',
      icon: 'ri-user-heart-line',
      title: 'Conseil & Audit',
      description: 'Analyse et optimisation de vos interfaces existantes. Recommandations stratégiques pour améliorer l\'expérience utilisateur et les conversions.',
      features: ['Audit UX', 'Analyse Concurrentielle', 'Recommandations', 'Stratégie Design']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services pour répondre à tous vos besoins en design digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gray-900 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <i className="ri-check-line text-gray-900"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:gap-3 transition-all">
                En savoir plus
                <i className="ri-arrow-right-line"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
