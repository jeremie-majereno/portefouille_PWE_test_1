export default function SkillsSection() {
  const skills = [
    {
      icon: 'ri-pencil-ruler-2-line',
      title: 'UI Design',
      description: 'Création d\'interfaces visuellement attrayantes et cohérentes qui captivent l\'attention et renforcent l\'identité de marque.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'UX Design',
      description: 'Conception d\'expériences utilisateur intuitives basées sur la recherche et les tests pour maximiser la satisfaction et l\'engagement.'
    },
    {
      icon: 'ri-palette-line',
      title: 'Branding',
      description: 'Développement d\'identités visuelles fortes et mémorables qui racontent l\'histoire de votre marque de manière authentique.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Design Mobile',
      description: 'Création d\'applications mobiles natives et responsive qui offrent une expérience fluide sur tous les appareils.'
    },
    {
      icon: 'ri-window-line',
      title: 'Web Design',
      description: 'Conception de sites web modernes et performants qui convertissent les visiteurs en clients fidèles.'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Design System',
      description: 'Élaboration de systèmes de design cohérents et évolutifs pour garantir la consistance à travers tous les points de contact.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mes compétences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une expertise complète pour donner vie à vos projets digitaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-900 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gray-900 group-hover:bg-white rounded-xl mb-6 transition-colors">
                <i className={`${skill.icon} text-2xl text-white group-hover:text-gray-900 transition-colors`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
