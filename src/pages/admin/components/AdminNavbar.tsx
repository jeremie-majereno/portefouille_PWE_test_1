import { Link } from 'react-router-dom';

export default function AdminNavbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Admin
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <i className="ri-notification-3-line text-xl"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">AD</span>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Admin</p>
                <p className="text-gray-500">Administrateur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
