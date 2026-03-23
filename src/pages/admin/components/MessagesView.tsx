import { useState } from 'react';

export default function MessagesView() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [messages] = useState([
    { id: 1, name: 'Claire Fontaine', email: 'claire@example.com', subject: 'Demande de devis', message: 'Bonjour, je souhaiterais obtenir un devis pour la refonte de mon site web. Mon entreprise est dans le secteur de la mode et j\'aimerais un design moderne et élégant.', date: '2024-01-15', read: false },
    { id: 2, name: 'Thomas Bernard', email: 'thomas@example.com', subject: 'Question sur vos services', message: 'Bonjour, proposez-vous également des services de maintenance après la création du site ?', date: '2024-01-14', read: true },
    { id: 3, name: 'Emma Rousseau', email: 'emma@example.com', subject: 'Collaboration', message: 'Bonjour, je suis intéressée par une collaboration sur un projet de branding pour ma startup.', date: '2024-01-13', read: false },
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
        <p className="text-gray-600">Consultez les messages de vos clients</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Boîte de réception</h2>
          </div>
          <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                onClick={() => setSelectedMessage(message.id)}
                className={`p-4 cursor-pointer transition-colors ${
                  selectedMessage === message.id 
                    ? 'bg-teal-50' 
                    : 'hover:bg-gray-50'
                } ${!message.read ? 'bg-blue-50/30' : ''}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`text-sm font-semibold ${!message.read ? 'text-gray-900' : 'text-gray-700'}`}>
                    {message.name}
                  </h3>
                  {!message.read && (
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">{message.subject}</p>
                <p className="text-xs text-gray-500">{message.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
          {selectedMessage ? (
            <>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {messages.find(m => m.id === selectedMessage)?.subject}
                    </h2>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span className="font-semibold">{messages.find(m => m.id === selectedMessage)?.name}</span>
                      <span>&lt;{messages.find(m => m.id === selectedMessage)?.email}&gt;</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors cursor-pointer">
                    <i className="ri-delete-bin-line text-lg"></i>
                  </button>
                </div>
                <p className="text-sm text-gray-500">{messages.find(m => m.id === selectedMessage)?.date}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {messages.find(m => m.id === selectedMessage)?.message}
                </p>
                <button className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-reply-line text-lg"></i>
                  <span className="font-semibold">Répondre</span>
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full min-h-[400px]">
              <div className="text-center">
                <i className="ri-mail-line text-6xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Sélectionnez un message pour le lire</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
