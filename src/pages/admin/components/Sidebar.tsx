interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'ri-dashboard-line' },
    { id: 'projects', label: 'Projets', icon: 'ri-folder-line' },
    { id: 'services', label: 'Services', icon: 'ri-service-line' },
    { id: 'testimonials', label: 'Témoignages', icon: 'ri-chat-quote-line' },
    { id: 'messages', label: 'Messages', icon: 'ri-mail-line' },
    { id: 'settings', label: 'Paramètres', icon: 'ri-settings-3-line' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeView === item.id
                ? 'bg-teal-50 text-teal-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <i className={`${item.icon} text-xl`}></i>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
