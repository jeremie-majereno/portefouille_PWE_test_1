import { useState } from 'react';
import AdminNavbar from './components/AdminNavbar';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import ProjectsView from './components/ProjectsView';
import ServicesView from './components/ServicesView';
import TestimonialsView from './components/TestimonialsView';
import MessagesView from './components/MessagesView';
import SettingsView from './components/SettingsView';

export default function AdminPage() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'projects':
        return <ProjectsView />;
      case 'services':
        return <ServicesView />;
      case 'testimonials':
        return <TestimonialsView />;
      case 'messages':
        return <MessagesView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <div className="flex">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 p-8 ml-64">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
