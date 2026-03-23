import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  tags: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Mock data - remplacer par vraies données plus tard
    const projects: Record<string, Project> = {
      '1': {
        id: 1,
        title: 'Application E-commerce Mobile',
        category: 'UI/UX Design',
        client: 'FashionHub',
        year: '2024',
        duration: '3 mois',
        description: 'Conception complète d\'une application mobile e-commerce pour une marque de mode émergente. L\'objectif était de créer une expérience d\'achat fluide et engageante qui reflète l\'identité moderne de la marque.',
        challenge: 'Le principal défi était de créer une interface qui facilite la découverte de produits tout en simplifiant le processus d\'achat. Il fallait également intégrer des fonctionnalités sociales pour encourager le partage et l\'engagement communautaire.',
        solution: 'J\'ai développé un design system complet avec des composants réutilisables, implémenté une navigation intuitive par catégories, et créé un tunnel d\'achat optimisé en 3 étapes. L\'interface utilise des animations subtiles pour guider l\'utilisateur et rendre l\'expérience plus agréable.',
        results: [
          'Augmentation de 45% du taux de conversion',
          'Réduction de 60% du taux d\'abandon de panier',
          'Note moyenne de 4.8/5 sur l\'App Store',
          'Plus de 50 000 téléchargements en 2 mois'
        ],
        images: [
          'https://readdy.ai/api/search-image?query=modern%20mobile%20ecommerce%20app%20interface%20with%20product%20gallery%20shopping%20cart%20and%20user%20profile%20screens%20displayed%20on%20multiple%20smartphone%20mockups%20clean%20white%20background%20professional%20showcase&width=1200&height=800&seq=project-detail-001&orientation=landscape',
          'https://readdy.ai/api/search-image?query=mobile%20app%20checkout%20flow%20interface%20with%20payment%20options%20shipping%20details%20and%20order%20confirmation%20screens%20on%20smartphone%20mockups%20minimalist%20white%20background&width=1200&height=800&seq=project-detail-002&orientation=landscape',
          'https://readdy.ai/api/search-image?query=mobile%20app%20design%20system%20with%20color%20palette%20typography%20buttons%20and%20ui%20components%20displayed%20on%20clean%20white%20background%20professional%20design%20showcase&width=1200&height=800&seq=project-detail-003&orientation=landscape'
        ],
        tags: ['Mobile', 'E-commerce', 'iOS', 'Android', 'Figma', 'Prototyping'],
        testimonial: {
          text: 'Le travail fourni a dépassé toutes nos attentes. L\'application est non seulement magnifique, mais aussi incroyablement intuitive. Nos ventes ont explosé depuis le lancement.',
          author: 'Sophie Martin',
          role: 'CEO, FashionHub'
        }
      },
      '2': {
        id: 2,
        title: 'Plateforme SaaS Dashboard',
        category: 'Web Design',
        client: 'DataFlow Analytics',
        year: '2024',
        duration: '4 mois',
        description: 'Refonte complète du dashboard d\'une plateforme SaaS d\'analyse de données. L\'objectif était de rendre les données complexes accessibles et actionnables pour tous les types d\'utilisateurs.',
        challenge: 'La plateforme existante était surchargée d\'informations et difficile à naviguer. Les utilisateurs se plaignaient de ne pas trouver rapidement les insights dont ils avaient besoin.',
        solution: 'J\'ai restructuré l\'architecture de l\'information en créant des vues personnalisables par rôle. Implémentation de visualisations de données interactives, d\'un système de filtres avancés et d\'un tableau de bord modulaire permettant à chaque utilisateur de créer sa vue idéale.',
        results: [
          'Réduction de 70% du temps de recherche d\'information',
          'Augmentation de 55% de l\'engagement utilisateur',
          'Diminution de 40% des tickets support',
          'Taux de satisfaction utilisateur passé de 3.2 à 4.7/5'
        ],
        images: [
          'https://readdy.ai/api/search-image?query=modern%20saas%20dashboard%20interface%20with%20data%20visualization%20charts%20graphs%20and%20analytics%20on%20laptop%20screen%20clean%20white%20background%20professional%20web%20design&width=1200&height=800&seq=project-detail-004&orientation=landscape',
          'https://readdy.ai/api/search-image?query=dashboard%20analytics%20interface%20with%20interactive%20charts%20data%20tables%20and%20filter%20options%20displayed%20on%20desktop%20screen%20minimalist%20white%20background&width=1200&height=800&seq=project-detail-005&orientation=landscape',
          'https://readdy.ai/api/search-image?query=web%20dashboard%20design%20system%20with%20ui%20components%20cards%20buttons%20and%20navigation%20elements%20on%20clean%20white%20background%20professional%20showcase&width=1200&height=800&seq=project-detail-006&orientation=landscape'
        ],
        tags: ['Web', 'SaaS', 'Dashboard', 'Data Viz', 'React', 'Responsive'],
        testimonial: {
          text: 'La transformation est remarquable. Nos clients adorent la nouvelle interface et notre équipe support a vu une baisse significative des demandes d\'aide.',
          author: 'Marc Dubois',
          role: 'Product Manager, DataFlow'
        }
      },
      '3': {
        id: 3,
        title: 'Identité Visuelle Restaurant',
        category: 'Branding',
        client: 'Le Jardin Gourmand',
        year: '2023',
        duration: '2 mois',
        description: 'Création d\'une identité visuelle complète pour un restaurant gastronomique. Le projet incluait le logo, la charte graphique, les menus, la signalétique et tous les supports de communication.',
        challenge: 'Le restaurant souhaitait se positionner comme une adresse haut de gamme tout en conservant une approche chaleureuse et accessible. Il fallait créer une identité qui reflète l\'excellence culinaire sans être intimidante.',
        solution: 'J\'ai développé une identité élégante et intemporelle basée sur des formes organiques inspirées du jardin. La palette de couleurs terreuses et sophistiquées évoque la nature et la qualité des produits. La typographie combine modernité et tradition.',
        results: [
          'Reconnaissance de marque augmentée de 80%',
          'Augmentation de 35% des réservations',
          'Présence renforcée sur les réseaux sociaux',
          'Prix du meilleur design restaurant 2023'
        ],
        images: [
          'https://readdy.ai/api/search-image?query=elegant%20restaurant%20branding%20identity%20with%20logo%20business%20cards%20menu%20design%20and%20stationery%20mockups%20on%20clean%20white%20surface%20minimalist%20professional%20showcase&width=1200&height=800&seq=project-detail-007&orientation=landscape',
          'https://readdy.ai/api/search-image?query=restaurant%20brand%20identity%20with%20packaging%20design%20takeaway%20boxes%20and%20branded%20materials%20displayed%20on%20white%20background%20elegant%20professional%20mockup&width=1200&height=800&seq=project-detail-008&orientation=landscape',
          'https://readdy.ai/api/search-image?query=restaurant%20signage%20and%20environmental%20graphics%20with%20menu%20boards%20wall%20art%20and%20wayfinding%20elements%20clean%20white%20background%20professional%20branding%20showcase&width=1200&height=800&seq=project-detail-009&orientation=landscape'
        ],
        tags: ['Branding', 'Logo', 'Print', 'Packaging', 'Signage', 'Restaurant'],
        testimonial: {
          text: 'L\'identité créée capture parfaitement l\'essence de notre restaurant. Nos clients adorent l\'esthétique et cela nous a vraiment aidés à nous démarquer.',
          author: 'Pierre Lefebvre',
          role: 'Chef & Propriétaire, Le Jardin Gourmand'
        }
      },
      '4': {
        id: 4,
        title: 'Application Fitness & Wellness',
        category: 'UI/UX Design',
        client: 'FitLife Pro',
        year: '2024',
        duration: '3 mois',
        description: 'Design d\'une application mobile complète de fitness et bien-être incluant suivi d\'entraînement, nutrition, méditation et coaching personnalisé.',
        challenge: 'Créer une application qui motive les utilisateurs à maintenir leurs habitudes santé sur le long terme, tout en rendant le suivi des progrès simple et gratifiant.',
        solution: 'J\'ai conçu une interface gamifiée avec un système de récompenses, des visualisations de progrès inspirantes et une personnalisation poussée. L\'application s\'adapte au niveau et aux objectifs de chaque utilisateur avec des recommandations intelligentes.',
        results: [
          'Taux de rétention de 75% après 3 mois',
          'Moyenne de 4.9/5 sur les stores',
          'Plus de 100 000 utilisateurs actifs',
          'Durée moyenne de session de 25 minutes'
        ],
        images: [
          'https://readdy.ai/api/search-image?query=modern%20fitness%20wellness%20app%20interface%20with%20workout%20tracking%20health%20metrics%20and%20progress%20charts%20on%20smartphone%20mockups%20clean%20white%20background%20professional%20design&width=1200&height=800&seq=project-detail-010&orientation=landscape',
          'https://readdy.ai/api/search-image?query=fitness%20app%20nutrition%20tracking%20meal%20planning%20and%20calorie%20counter%20screens%20displayed%20on%20mobile%20devices%20minimalist%20white%20background%20professional%20showcase&width=1200&height=800&seq=project-detail-011&orientation=landscape',
          'https://readdy.ai/api/search-image?query=wellness%20app%20meditation%20mindfulness%20and%20sleep%20tracking%20interface%20on%20smartphone%20mockups%20with%20clean%20white%20background%20modern%20design%20showcase&width=1200&height=800&seq=project-detail-012&orientation=landscape'
        ],
        tags: ['Mobile', 'Health', 'Android', 'iOS', 'Gamification', 'Wellness'],
        testimonial: {
          text: 'L\'application est magnifique et tellement facile à utiliser. Nos utilisateurs sont engagés comme jamais et les retours sont exceptionnels.',
          author: 'Julie Rousseau',
          role: 'Founder, FitLife Pro'
        }
      }
    };

    if (id && projects[id]) {
      setProject(projects[id]);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projet non trouvé</h2>
          <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 cursor-pointer">
            Retour au portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Retour au portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-gray-500 mb-3">
                {project.category}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Client</div>
                  <div className="text-sm font-semibold text-gray-900">{project.client}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Année</div>
                  <div className="text-sm font-semibold text-gray-900">{project.year}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Durée</div>
                  <div className="text-sm font-semibold text-gray-900">{project.duration}</div>
                </div>
              </div>
            </div>

            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Le Défi</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">La Solution</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Résultats Obtenus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full mx-auto mb-4">
                  <i className="ri-check-line text-xl"></i>
                </div>
                <p className="text-sm text-gray-700 font-medium">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <i className="ri-double-quotes-l text-5xl text-white/20 mb-6 block"></i>
            <p className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
              {project.testimonial.text}
            </p>
            <div>
              <div className="font-semibold text-lg">{project.testimonial.author}</div>
              <div className="text-sm text-white/70">{project.testimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discutons de vos besoins et créons ensemble quelque chose d'exceptionnel
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Démarrer un projet
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
