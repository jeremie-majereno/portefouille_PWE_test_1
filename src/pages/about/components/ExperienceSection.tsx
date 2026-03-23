export default function ExperienceSection() {
  const values = [
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Innovation',
      description: 'Toujours à la recherche de nouvelles approches créatives pour résoudre les défis de design.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Empathie',
      description: 'Comprendre profondément les besoins des utilisateurs pour créer des solutions pertinentes.'
    },
    {
      icon: 'ri-focus-3-line',
      title: 'Excellence',
      description: 'Un engagement sans compromis envers la qualité et l\'attention aux détails.'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description: 'Travailler main dans la main avec les équipes pour atteindre des objectifs communs.'
    }
  ];

  const experience = [
    {
      year: '2023 - Présent',
      role: 'Designer UI/UX Senior',
      company: 'Studio Créatif',
      description: 'Direction de projets de design pour des clients internationaux, création de systèmes de design et mentorat d\'équipes juniors.'
    },
    {
      year: '2021 - 2023',
      role: 'Designer UI/UX',
      company: 'TechStart Agency',
      description: 'Conception d\'interfaces pour applications web et mobiles, recherche utilisateur et tests d\'utilisabilité.'
    },
    {
      year: '2019 - 2021',
      role: 'Designer Graphique',
      company: 'Digital Solutions',
      description: 'Création d\'identités visuelles, design de supports marketing et développement de chartes graphiques.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Mes valeurs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Les principes qui guident mon travail au quotidien
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-900 rounded-2xl mx-auto mb-4">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Mon parcours
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Une évolution constante dans le monde du design
          </p>
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-32 pt-1">
                  <div className="text-sm font-semibold text-gray-900">
                    {exp.year}
                  </div>
                </div>
                <div className="flex-shrink-0 pt-2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  {index !== experience.length - 1 && (
                    <div className="w-px h-full bg-gray-200 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-gray-600 mb-3">
                    {exp.company}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
