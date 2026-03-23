import { Link } from 'react-router-dom';

interface ProjectsGridProps {
  activeFilter: string;
}

export default function ProjectsGrid({ activeFilter }: ProjectsGridProps) {
  const projects = [
    {
      id: 1,
      title: 'Application E-commerce Mobile',
      category: 'UI/UX',
      tags: ['Mobile', 'E-commerce', 'iOS'],
      image: 'https://readdy.ai/api/search-image?query=modern%20mobile%20ecommerce%20app%20interface%20design%20with%20clean%20product%20cards%20shopping%20cart%20and%20checkout%20flow%20displayed%20on%20smartphone%20mockup%20with%20minimalist%20white%20background%20professional%20ui%20ux%20showcase&width=800&height=600&seq=portfolio-001&orientation=landscape'
    },
    {
      id: 2,
      title: 'Plateforme SaaS Dashboard',
      category: 'Web',
      tags: ['Web', 'SaaS', 'Dashboard'],
      image: 'https://readdy.ai/api/search-image?query=sophisticated%20saas%20dashboard%20interface%20with%20data%20visualization%20charts%20graphs%20and%20analytics%20displayed%20on%20laptop%20screen%20clean%20modern%20design%20with%20white%20background%20professional%20web%20design%20showcase&width=800&height=600&seq=portfolio-002&orientation=landscape'
    },
    {
      id: 3,
      title: 'Identité Visuelle Restaurant',
      category: 'Branding',
      tags: ['Branding', 'Logo', 'Print'],
      image: 'https://readdy.ai/api/search-image?query=elegant%20restaurant%20branding%20identity%20design%20with%20logo%20business%20cards%20menu%20and%20packaging%20mockups%20displayed%20on%20clean%20white%20surface%20minimalist%20professional%20brand%20showcase&width=800&height=600&seq=portfolio-003&orientation=landscape'
    },
    {
      id: 4,
      title: 'Application Fitness & Wellness',
      category: 'Mobile',
      tags: ['Mobile', 'Health', 'Android'],
      image: 'https://readdy.ai/api/search-image?query=modern%20fitness%20wellness%20app%20interface%20with%20workout%20tracking%20health%20metrics%20and%20progress%20charts%20on%20smartphone%20mockup%20clean%20white%20background%20professional%20mobile%20design%20showcase&width=800&height=600&seq=portfolio-004&orientation=landscape'
    },
    {
      id: 5,
      title: 'Site Web Agence Créative',
      category: 'Web',
      tags: ['Web', 'Portfolio', 'Agency'],
      image: 'https://readdy.ai/api/search-image?query=creative%20agency%20website%20design%20with%20bold%20typography%20stunning%20portfolio%20grid%20and%20modern%20layout%20displayed%20on%20desktop%20screen%20clean%20white%20background%20professional%20web%20showcase&width=800&height=600&seq=portfolio-005&orientation=landscape'
    },
    {
      id: 6,
      title: 'Application Bancaire Mobile',
      category: 'UI/UX',
      tags: ['Mobile', 'Finance', 'iOS'],
      image: 'https://readdy.ai/api/search-image?query=sleek%20banking%20app%20interface%20with%20account%20overview%20transaction%20history%20and%20payment%20features%20on%20smartphone%20mockup%20minimalist%20white%20background%20professional%20fintech%20design%20showcase&width=800&height=600&seq=portfolio-006&orientation=landscape'
    },
    {
      id: 7,
      title: 'Branding Startup Tech',
      category: 'Branding',
      tags: ['Branding', 'Logo', 'Tech'],
      image: 'https://readdy.ai/api/search-image?query=modern%20tech%20startup%20branding%20with%20innovative%20logo%20design%20business%20stationery%20and%20brand%20guidelines%20displayed%20on%20clean%20white%20surface%20professional%20brand%20identity%20showcase&width=800&height=600&seq=portfolio-007&orientation=landscape'
    },
    {
      id: 8,
      title: 'Plateforme E-learning',
      category: 'Web',
      tags: ['Web', 'Education', 'Platform'],
      image: 'https://readdy.ai/api/search-image?query=comprehensive%20elearning%20platform%20interface%20with%20course%20catalog%20video%20player%20and%20progress%20tracking%20on%20laptop%20screen%20clean%20design%20white%20background%20professional%20education%20tech%20showcase&width=800&height=600&seq=portfolio-008&orientation=landscape'
    },
    {
      id: 9,
      title: 'Application Réservation Voyage',
      category: 'Mobile',
      tags: ['Mobile', 'Travel', 'Booking'],
      image: 'https://readdy.ai/api/search-image?query=elegant%20travel%20booking%20app%20interface%20with%20destination%20search%20hotel%20listings%20and%20booking%20flow%20on%20smartphone%20mockup%20clean%20white%20background%20professional%20travel%20tech%20design%20showcase&width=800&height=600&seq=portfolio-009&orientation=landscape'
    }
  ];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
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
      </div>
    </section>
  );
}
