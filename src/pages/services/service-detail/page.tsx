import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  deliverables: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  caseStudies: Array<{
    title: string;
    image: string;
    link: string;
  }>;
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const services: Record<string, Service> = {
      'ui-ux-design': {
        id: 'ui-ux-design',
        icon: 'ri-palette-line',
        title: 'Design UI/UX',
        subtitle: 'Créez des expériences digitales mémorables',
        description: 'Conception d\'interfaces utilisateur intuitives et esthétiques centrées sur vos utilisateurs',
        longDescription: 'Je conçois des interfaces qui allient beauté et fonctionnalité. Mon approche centrée utilisateur garantit que chaque élément de votre produit digital est pensé pour offrir la meilleure expérience possible. Du wireframe au prototype interactif, je vous accompagne à chaque étape pour transformer votre vision en réalité.',
        process: [
          {
            step: 1,
            title: 'Recherche & Analyse',
            description: 'Étude approfondie de vos utilisateurs, analyse concurrentielle et définition des objectifs'
          },
          {
            step: 2,
            title: 'Wireframing',
            description: 'Création de maquettes fonctionnelles pour valider l\'architecture de l\'information'
          },
          {
            step: 3,
            title: 'Design Visuel',
            description: 'Conception de l\'interface avec attention aux détails et cohérence visuelle'
          },
          {
            step: 4,
            title: 'Prototypage',
            description: 'Création de prototypes interactifs pour tester et valider les interactions'
          },
          {
            step: 5,
            title: 'Tests Utilisateurs',
            description: 'Validation avec de vrais utilisateurs et itérations basées sur les retours'
          },
          {
            step: 6,
            title: 'Livraison',
            description: 'Remise des fichiers finaux et documentation complète pour les développeurs'
          }
        ],
        deliverables: [
          'Wireframes basse et haute fidélité',
          'Maquettes UI complètes (desktop, tablet, mobile)',
          'Prototypes interactifs Figma',
          'Design system avec composants réutilisables',
          'Guide de style et spécifications',
          'Assets exportés pour le développement',
          'Documentation technique détaillée'
        ],
        pricing: {
          starter: '2 000€',
          professional: '4 500€',
          enterprise: 'Sur devis'
        },
        faqs: [
          {
            question: 'Combien de temps prend un projet UI/UX ?',
            answer: 'La durée varie selon la complexité du projet. Un site vitrine simple prend 2-3 semaines, tandis qu\'une application complexe peut nécessiter 2-3 mois. Je fournis toujours un planning détaillé après notre première discussion.'
          },
          {
            question: 'Proposez-vous des révisions ?',
            answer: 'Oui, chaque formule inclut un nombre de révisions. La formule Starter inclut 2 révisions, Professional 4 révisions, et Enterprise des révisions illimitées. Les révisions supplémentaires peuvent être ajoutées si nécessaire.'
          },
          {
            question: 'Travaillez-vous avec des développeurs ?',
            answer: 'Absolument ! Je fournis tous les fichiers et spécifications nécessaires pour faciliter le travail des développeurs. Je peux également collaborer directement avec votre équipe technique pour assurer une intégration parfaite.'
          },
          {
            question: 'Quels outils utilisez-vous ?',
            answer: 'Je travaille principalement avec Figma pour le design et le prototypage, Adobe Creative Suite pour les assets graphiques, et divers outils de recherche UX comme Maze et Hotjar pour les tests utilisateurs.'
          }
        ],
        caseStudies: [
          {
            title: 'Application E-commerce Mobile',
            image: 'https://readdy.ai/api/search-image?query=modern%20mobile%20ecommerce%20app%20interface%20design%20with%20clean%20product%20cards%20shopping%20cart%20displayed%20on%20smartphone%20mockup%20minimalist%20white%20background&width=600&height=400&seq=service-case-001&orientation=landscape',
            link: '/portfolio/1'
          },
          {
            title: 'Plateforme SaaS Dashboard',
            image: 'https://readdy.ai/api/search-image?query=sophisticated%20saas%20dashboard%20interface%20with%20data%20visualization%20charts%20displayed%20on%20laptop%20screen%20clean%20white%20background&width=600&height=400&seq=service-case-002&orientation=landscape',
            link: '/portfolio/2'
          }
        ]
      },
      'design-mobile': {
        id: 'design-mobile',
        icon: 'ri-smartphone-line',
        title: 'Design Mobile',
        subtitle: 'Applications mobiles qui captivent vos utilisateurs',
        description: 'Design d\'applications natives et hybrides pour iOS et Android',
        longDescription: 'Je crée des applications mobiles qui offrent une expérience fluide et naturelle. En respectant les guidelines iOS et Android, je conçois des interfaces qui semblent natives tout en conservant votre identité de marque. Chaque interaction est pensée pour être intuitive et agréable.',
        process: [
          {
            step: 1,
            title: 'Audit & Stratégie',
            description: 'Analyse de vos besoins et définition de la stratégie mobile (native, hybride, PWA)'
          },
          {
            step: 2,
            title: 'Architecture',
            description: 'Conception de l\'architecture de l\'application et des flux utilisateurs'
          },
          {
            step: 3,
            title: 'Design iOS & Android',
            description: 'Création des interfaces en respectant les guidelines de chaque plateforme'
          },
          {
            step: 4,
            title: 'Micro-interactions',
            description: 'Design des animations et transitions pour une expérience fluide'
          },
          {
            step: 5,
            title: 'Tests Devices',
            description: 'Validation sur différents appareils et tailles d\'écran'
          },
          {
            step: 6,
            title: 'Handoff Développeurs',
            description: 'Préparation des assets et documentation pour le développement'
          }
        ],
        deliverables: [
          'Maquettes iOS et Android',
          'Prototypes interactifs',
          'Spécifications des animations',
          'Assets exportés (@1x, @2x, @3x)',
          'Design system mobile',
          'Guide d\'implémentation',
          'Icônes d\'application (tous formats)'
        ],
        pricing: {
          starter: '2 500€',
          professional: '5 000€',
          enterprise: 'Sur devis'
        },
        faqs: [
          {
            question: 'Faut-il créer deux designs différents pour iOS et Android ?',
            answer: 'Cela dépend de votre stratégie. Je peux créer un design unifié qui fonctionne sur les deux plateformes, ou des designs spécifiques qui respectent les conventions de chaque OS pour une expérience plus native.'
          },
          {
            question: 'Gérez-vous aussi le design des icônes d\'application ?',
            answer: 'Oui, je crée l\'icône de votre application dans tous les formats requis pour iOS et Android, ainsi que les écrans de lancement (splash screens) si nécessaire.'
          },
          {
            question: 'Proposez-vous des tests sur vrais appareils ?',
            answer: 'Absolument. Je teste les prototypes sur différents appareils iOS et Android pour m\'assurer que l\'expérience est optimale sur toutes les tailles d\'écran.'
          }
        ],
        caseStudies: [
          {
            title: 'Application Fitness & Wellness',
            image: 'https://readdy.ai/api/search-image?query=modern%20fitness%20wellness%20app%20interface%20with%20workout%20tracking%20displayed%20on%20smartphone%20mockup%20clean%20white%20background&width=600&height=400&seq=service-case-003&orientation=landscape',
            link: '/portfolio/4'
          }
        ]
      },
      'design-web': {
        id: 'design-web',
        icon: 'ri-window-line',
        title: 'Design Web',
        subtitle: 'Sites web qui convertissent et engagent',
        description: 'Création de sites web modernes, performants et responsive',
        longDescription: 'Du site vitrine à la plateforme e-commerce complexe, je conçois des expériences web qui captivent vos visiteurs et les transforment en clients. Chaque design est pensé pour être responsive, accessible et optimisé pour la conversion.',
        process: [
          {
            step: 1,
            title: 'Brief & Objectifs',
            description: 'Compréhension de vos objectifs business et de votre audience cible'
          },
          {
            step: 2,
            title: 'Sitemap & Wireframes',
            description: 'Définition de l\'architecture du site et création des wireframes'
          },
          {
            step: 3,
            title: 'Design Desktop',
            description: 'Conception de l\'interface pour écrans desktop'
          },
          {
            step: 4,
            title: 'Design Responsive',
            description: 'Adaptation pour tablettes et mobiles'
          },
          {
            step: 5,
            title: 'Interactions & Animations',
            description: 'Définition des micro-interactions et animations'
          },
          {
            step: 6,
            title: 'Optimisation & Livraison',
            description: 'Optimisation des assets et préparation pour le développement'
          }
        ],
        deliverables: [
          'Maquettes desktop, tablet, mobile',
          'Prototypes interactifs',
          'Design system web',
          'Assets optimisés (images, icônes)',
          'Spécifications responsive',
          'Guide d\'animations',
          'Documentation développeur'
        ],
        pricing: {
          starter: '1 500€',
          professional: '3 500€',
          enterprise: 'Sur devis'
        },
        faqs: [
          {
            question: 'Le design sera-t-il responsive ?',
            answer: 'Oui, tous mes designs sont responsive par défaut. Je conçois pour desktop, tablet et mobile pour garantir une expérience optimale sur tous les appareils.'
          },
          {
            question: 'Incluez-vous l\'intégration frontend ?',
            answer: 'Le design web se concentre sur la conception visuelle. L\'intégration frontend est un service séparé, mais je peux vous proposer un package complet design + intégration.'
          },
          {
            question: 'Optimisez-vous pour le SEO ?',
            answer: 'Je conçois avec les bonnes pratiques SEO en tête (hiérarchie de contenu, structure sémantique, performance). Pour une optimisation SEO complète, je recommande de travailler avec un spécialiste SEO.'
          }
        ],
        caseStudies: [
          {
            title: 'Plateforme SaaS Dashboard',
            image: 'https://readdy.ai/api/search-image?query=sophisticated%20saas%20dashboard%20interface%20with%20data%20visualization%20displayed%20on%20laptop%20screen%20clean%20white%20background&width=600&height=400&seq=service-case-004&orientation=landscape',
            link: '/portfolio/2'
          }
        ]
      },
      'branding': {
        id: 'branding',
        icon: 'ri-brush-line',
        title: 'Branding & Identité',
        subtitle: 'Construisez une marque forte et mémorable',
        description: 'Création d\'identités visuelles complètes qui racontent votre histoire',
        longDescription: 'Votre identité visuelle est bien plus qu\'un logo. C\'est l\'essence de votre marque, ce qui vous rend unique et mémorable. Je crée des identités visuelles cohérentes et impactantes qui résonnent avec votre audience et se démarquent de la concurrence.',
        process: [
          {
            step: 1,
            title: 'Découverte',
            description: 'Immersion dans votre univers, vos valeurs et votre positionnement'
          },
          {
            step: 2,
            title: 'Recherche',
            description: 'Analyse concurrentielle et exploration de directions créatives'
          },
          {
            step: 3,
            title: 'Concepts',
            description: 'Présentation de 3 directions créatives avec moodboards'
          },
          {
            step: 4,
            title: 'Développement',
            description: 'Raffinement du concept choisi et déclinaisons'
          },
          {
            step: 5,
            title: 'Charte Graphique',
            description: 'Création de la charte graphique complète'
          },
          {
            step: 6,
            title: 'Applications',
            description: 'Déclinaison sur tous les supports (print, digital, signalétique)'
          }
        ],
        deliverables: [
          'Logo (versions principales et alternatives)',
          'Charte graphique complète',
          'Palette de couleurs',
          'Typographies',
          'Éléments graphiques',
          'Mockups de supports',
          'Brand guidelines (PDF)',
          'Fichiers sources (AI, EPS, SVG, PNG)'
        ],
        pricing: {
          starter: '2 500€',
          professional: '5 500€',
          enterprise: 'Sur devis'
        },
        faqs: [
          {
            question: 'Combien de concepts proposez-vous ?',
            answer: 'Je présente généralement 3 directions créatives différentes avec des moodboards. Vous choisissez celle qui vous correspond le mieux, puis nous la développons ensemble.'
          },
          {
            question: 'Puis-je avoir les fichiers sources ?',
            answer: 'Oui, vous recevez tous les fichiers sources (AI, EPS) ainsi que les exports dans tous les formats nécessaires (PNG, SVG, PDF) pour une utilisation print et digital.'
          },
          {
            question: 'Créez-vous aussi les supports de communication ?',
            answer: 'Oui, je peux créer tous vos supports : cartes de visite, papeterie, brochures, packaging, signalétique, etc. C\'est inclus dans les formules Professional et Enterprise.'
          }
        ],
        caseStudies: [
          {
            title: 'Identité Visuelle Restaurant',
            image: 'https://readdy.ai/api/search-image?query=elegant%20restaurant%20branding%20identity%20with%20logo%20business%20cards%20displayed%20on%20clean%20white%20surface%20minimalist%20professional&width=600&height=400&seq=service-case-005&orientation=landscape',
            link: '/portfolio/3'
          }
        ]
      }
    };

    if (slug && services[slug]) {
      setService(services[slug]);
    }
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service non trouvé</h2>
          <Link to="/services" className="text-gray-600 hover:text-gray-900 cursor-pointer">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Retour aux services
          </Link>

          <div className="max-w-4xl">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-900 text-white rounded-2xl mb-6">
              <i className={`${service.icon} text-3xl`}></i>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {service.subtitle}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            Mon Processus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Ce que vous recevez
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-xl p-4"
                >
                  <i className="ri-check-line text-xl text-gray-900"></i>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Tarifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                {service.pricing.starter}
              </div>
              <Link
                to="/contact"
                className="block w-full py-3 text-center bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all whitespace-nowrap cursor-pointer"
              >
                Commencer
              </Link>
            </div>
            <div className="bg-gray-900 text-white rounded-2xl p-8 scale-105 shadow-xl">
              <div className="text-xs font-semibold bg-white text-gray-900 px-3 py-1 rounded-full inline-block mb-4 whitespace-nowrap">
                Le plus populaire
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-6">
                {service.pricing.professional}
              </div>
              <Link
                to="/contact"
                className="block w-full py-3 text-center bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer"
              >
                Commencer
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                {service.pricing.enterprise}
              </div>
              <Link
                to="/contact"
                className="block w-full py-3 text-center bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all whitespace-nowrap cursor-pointer"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {service.caseStudies.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Projets Réalisés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {service.caseStudies.map((study, index) => (
                <Link
                  key={index}
                  to={study.link}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Questions Fréquentes
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Discutons de vos besoins et créons ensemble quelque chose d'exceptionnel
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Demander un devis
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
