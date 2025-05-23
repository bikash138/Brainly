import React from 'react';
import { 
  Home, 
  Youtube, 
  FileText, 
  Twitter, 
  Tag, 
  Star, 
  Clock, 
  BarChart2, 
  Settings, 
  ChevronLeft,
  BookOpen,
  Database
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  count?: number;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, count }) => (
  <li>
    <a
      href="#"
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
        active
          ? 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span className="flex-1">{label}</span>
      {count !== undefined && (
        <span className={`px-2 py-0.5 ml-auto text-xs font-medium rounded-full ${
          active 
            ? 'bg-teal-200 text-teal-800 dark:bg-teal-800 dark:text-teal-200' 
            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
        }`}>
          {count}
        </span>
      )}
    </a>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-20 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:h-full`}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between h-16 px-4 bg-teal-500 dark:bg-teal-700">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-white" />
          <h1 className="text-lg font-bold text-white">SecondBrain</h1>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-1 text-teal-100 hover:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Sidebar content */}
      <div className="p-4 h-full overflow-y-auto">
        <nav className="space-y-1">
          <h2 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Dashboard
          </h2>
          <ul className="mt-2 space-y-1">
            <NavItem icon={<Home size={18} />} label="Overview" active count={2} />
            <NavItem icon={<Database size={18} />} label="My Library" count={124} />
          </ul>

          <h2 className="mt-6 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Sources
          </h2>
          <ul className="mt-2 space-y-1">
            <NavItem icon={<Youtube size={18} />} label="YouTube" count={32} />
            <NavItem icon={<FileText size={18} />} label="PDFs" count={45} />
            <NavItem icon={<Twitter size={18} />} label="Twitter" count={19} />
          </ul>

          <h2 className="mt-6 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Organization
          </h2>
          <ul className="mt-2 space-y-1">
            <NavItem icon={<Tag size={18} />} label="Tags" count={28} />
            <NavItem icon={<Star size={18} />} label="Favorites" count={12} />
            <NavItem icon={<Clock size={18} />} label="Recent" count={8} />
          </ul>

          <h2 className="mt-6 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Insights
          </h2>
          <ul className="mt-2 space-y-1">
            <NavItem icon={<BarChart2 size={18} />} label="Analytics" />
            <NavItem icon={<Settings size={18} />} label="Settings" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;