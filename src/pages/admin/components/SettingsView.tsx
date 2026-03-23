export default function SettingsView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paramètres</h1>
        <p className="text-gray-600">Configurez votre espace d'administration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Profil</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
              <input 
                type="text" 
                defaultValue="Admin"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                defaultValue="admin@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
              <input 
                type="tel" 
                defaultValue="+33 6 12 34 56 78"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>
            <button className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
              Enregistrer les modifications
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Sécurité</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mot de passe actuel</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nouveau mot de passe</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Confirmer le mot de passe</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>
            <button className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
              Changer le mot de passe
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">Nouveaux messages</p>
                <p className="text-sm text-gray-600">Recevoir une notification pour chaque nouveau message</p>
              </div>
              <input 
                type="checkbox" 
                defaultChecked
                className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">Nouveaux projets</p>
                <p className="text-sm text-gray-600">Notification lors de l'ajout d'un projet</p>
              </div>
              <input 
                type="checkbox" 
                defaultChecked
                className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">Témoignages</p>
                <p className="text-sm text-gray-600">Notification pour les nouveaux témoignages</p>
              </div>
              <input 
                type="checkbox" 
                className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Informations du site</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nom du site</label>
              <input 
                type="text" 
                defaultValue="Portfolio Designer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea 
                rows={3}
                defaultValue="Portfolio professionnel de design UI/UX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                maxLength={500}
              ></textarea>
            </div>
            <button className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
