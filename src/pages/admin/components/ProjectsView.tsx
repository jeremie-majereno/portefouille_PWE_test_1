import { useState } from 'react';

export default function ProjectsView() {
  const [showModal, setShowModal] = useState(false);
  const [projects] = useState([
    { id: 1, title: 'Refonte site e-commerce', category: 'Web Design', client: 'TechStore', status: 'En cours', image: 'https://readdy.ai/api/search-image?query=modern%20ecommerce%20website%20design%20with%20clean%20white%20background%20minimalist%20professional%20interface%20shopping%20cart%20product%20display&width=400&height=300&seq=proj1&orientation=landscape' },
    { id: 2, title: 'Application mobile fitness', category: 'UI/UX', client: 'FitLife', status: 'Terminé', image: 'https://readdy.ai/api/search-image?query=fitness%20mobile%20app%20interface%20design%20with%20clean%20white%20background%20modern%20workout%20tracking%20health%20metrics%20dashboard&width=400&height=300&seq=proj2&orientation=landscape' },
    { id: 3, title: 'Branding startup tech', category: 'Branding', client: 'InnovateCo', status: 'En cours', image: 'https://readdy.ai/api/search-image?query=tech%20startup%20branding%20design%20with%20clean%20white%20background%20modern%20logo%20business%20cards%20brand%20identity%20materials&width=400&height=300&seq=proj3&orientation=landscape' },
    { id: 4, title: 'Site vitrine restaurant', category: 'Web Design', client: 'Le Gourmet', status: 'Terminé', image: 'https://readdy.ai/api/search-image?query=elegant%20restaurant%20website%20design%20with%20clean%20white%20background%20food%20menu%20presentation%20reservation%20system%20modern%20interface&width=400&height=300&seq=proj4&orientation=landscape' },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projets</h1>
          <p className="text-gray-600">Gérez tous vos projets</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line text-xl"></i>
          <span className="font-semibold">Nouveau projet</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">{project.category}</span>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                  project.status === 'Terminé' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {project.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">Client: {project.client}</p>
              <div className="flex items-center space-x-2">
                <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-semibold whitespace-nowrap cursor-pointer">
                  Modifier
                </button>
                <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-delete-bin-line text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Nouveau projet</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Titre du projet</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="Ex: Refonte site web"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Catégorie</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm">
                  <option>Web Design</option>
                  <option>UI/UX</option>
                  <option>Branding</option>
                  <option>Mobile</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Client</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="Nom du client"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="Description du projet"
                  maxLength={500}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
              <div className="flex items-center space-x-3 pt-4">
                <button className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
                  Créer le projet
                </button>
                <button 
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold whitespace-nowrap cursor-pointer"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
