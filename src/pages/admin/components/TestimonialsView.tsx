import { useState } from 'react';

export default function TestimonialsView() {
  const [showModal, setShowModal] = useState(false);
  const [testimonials] = useState([
    { id: 1, name: 'Sophie Martin', company: 'TechCorp', rating: 5, text: 'Excellent travail, très professionnel et à l\'écoute.', date: '2024-01-15', approved: true },
    { id: 2, name: 'Marc Dubois', company: 'StartupXYZ', rating: 5, text: 'Design moderne et fonctionnel, je recommande vivement !', date: '2024-01-12', approved: true },
    { id: 3, name: 'Julie Leroux', company: 'E-Shop Plus', rating: 4, text: 'Très satisfaite du résultat final.', date: '2024-01-10', approved: false },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Témoignages</h1>
          <p className="text-gray-600">Gérez les avis de vos clients</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line text-xl"></i>
          <span className="font-semibold">Nouveau témoignage</span>
        </button>
      </div>

      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`ri-star-${i < testimonial.rating ? 'fill' : 'line'} text-yellow-400`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                  testimonial.approved 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {testimonial.approved ? 'Approuvé' : 'En attente'}
                </span>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors cursor-pointer">
                  <i className="ri-edit-line text-lg"></i>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors cursor-pointer">
                  <i className="ri-delete-bin-line text-lg"></i>
                </button>
              </div>
            </div>
            <p className="text-gray-700 mb-3">{testimonial.text}</p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Nouveau témoignage</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom du client</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="Ex: Sophie Martin"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Entreprise</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="Ex: TechCorp"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Note</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm">
                  <option value="5">5 étoiles</option>
                  <option value="4">4 étoiles</option>
                  <option value="3">3 étoiles</option>
                  <option value="2">2 étoiles</option>
                  <option value="1">1 étoile</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Témoignage</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="Témoignage du client"
                  maxLength={500}
                ></textarea>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="approved"
                  className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="approved" className="text-sm font-semibold text-gray-700 cursor-pointer">
                  Approuver immédiatement
                </label>
              </div>
              <div className="flex items-center space-x-3 pt-4">
                <button className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
                  Ajouter le témoignage
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
