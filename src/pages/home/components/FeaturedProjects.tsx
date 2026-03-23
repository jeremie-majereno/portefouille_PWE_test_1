import { Link } from 'react-router-dom';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: 'Application E-commerce Mobile',
      category: 'UI/UX Design',
      image: 'https://readdy.ai/api/search-image?query=modern%20mobile%20ecommerce%20app%20interface%20design%20with%20clean%20product%20cards%20shopping%20cart%20and%20checkout%20flow%20displayed%20on%20smartphone%20mockup%20with%20minimalist%20white%20background%20professional%20ui%20ux%20showcase&width=800&height=600&seq=project-001&orientation=landscape',
      tags: ['Mobile', 'E-commerce', 'iOS']
    },
    {
      id: 2,
      title: 'Plateforme SaaS Dashboard',
      category: 'Web Design',
      image: 'https://readdy.ai/api/search-image?query=sophisticated%20saas%20dashboard%20interface%20with%20data%20visualization%20charts%20graphs%20and%20analytics%20displayed%20on%20laptop%20screen%20clean%20modern%20design%20with%20white%20background%20professional%20web%20design%20showcase&width=800&height=600&seq=project-002&orientation=landscape',
      tags: ['Web', 'SaaS', 'Dashboard']
    },
    {
      id: 3,
      title: 'Identité Visuelle Restaurant',
      category: 'Branding',
      image: 'https://readdy.ai/api/search-image?query=elegant%20restaurant%20branding%20identity%20design%20with%20logo%20business%20cards%20menu%20and%20packaging%20mockups%20displayed%20on%20clean%20white%20surface%20minimalist%20professional%20brand%20showcase&width=800&height=600&seq=project-003&orientation=landscape',
      tags: ['Branding', 'Logo', 'Print']
    },
    {
      id: 4,
      title: 'Application Fitness & Wellness',
      category: 'UI/UX Design',
      image: 'https://readdy.ai/api/search-image?query=modern%20fitness%20wellness%20app%20interface%20with%20workout%20tracking%20health%20metrics%20and%20progress%20charts%20on%20smartphone%20mockup%20clean%20white%20background%20professional%20mobile%20design%20showcase&width=800&height=600&seq=project-004&orientation=landscape',
      tags: ['Mobile', 'Health', 'Android']
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projets en vedette
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-500 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Voir tous les projets
            <i className="ri-arrow-right-line text-base"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
