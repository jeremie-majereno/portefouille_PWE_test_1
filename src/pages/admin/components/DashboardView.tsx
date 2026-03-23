export default function DashboardView() {
  const stats = [
    { label: 'Projets totaux', value: '24', icon: 'ri-folder-line', color: 'from-blue-400 to-blue-600' },
    { label: 'Services actifs', value: '6', icon: 'ri-service-line', color: 'from-teal-400 to-teal-600' },
    { label: 'Témoignages', value: '18', icon: 'ri-chat-quote-line', color: 'from-purple-400 to-purple-600' },
    { label: 'Messages non lus', value: '5', icon: 'ri-mail-line', color: 'from-orange-400 to-orange-600' },
  ];

  const recentProjects = [
    { id: 1, title: 'Refonte site e-commerce', client: 'TechStore', status: 'En cours', date: '2024-01-15' },
    { id: 2, title: 'Application mobile fitness', client: 'FitLife', status: 'Terminé', date: '2024-01-10' },
    { id: 3, title: 'Branding startup', client: 'InnovateCo', status: 'En cours', date: '2024-01-08' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
        <p className="text-gray-600">Vue d'ensemble de votre activité</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Projets récents</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Projet</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{project.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{project.client}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                      project.status === 'Terminé' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{project.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
