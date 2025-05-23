import React from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  User, 
  Moon, 
  Sun, 
  Plus,
  Loader2
} from 'lucide-react';
import SearchBar from '../Search/SearchBar';

interface HeaderProps {
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const handleSearch = async (query: string) => {
    console.log('Searching for:', query);
    // This will be replaced with actual RAG search implementation
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      {/* Left section */}
      <div className="flex items-center flex-1 max-w-2xl">
        <button
          onClick={toggleSidebar}
          className="p-2 mr-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors duration-200"
        >
          <Menu size={20} />
        </button>
        <div className="hidden md:block w-full">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-1 md:space-x-3">
        <button className="hidden md:flex items-center px-3 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out transform hover:scale-105">
          <Plus size={18} className="mr-1" />
          <span className="text-sm font-medium">Add Content</span>
        </button>
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
        >
          {isDarkMode ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>
        <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
          <Bell size={20} />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">3</span>
        </button>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
          <User size={18} className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </header>
  );
};

export default Header