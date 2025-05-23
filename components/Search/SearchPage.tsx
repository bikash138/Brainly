import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { FileText, Youtube, Twitter, Link } from 'lucide-react';

const SearchPage: React.FC = () => {
  const handleSearch = async (query: string) => {
    console.log('Searching for:', query);
    // This will be replaced with actual RAG search implementation
  };

  const searchStats = [
    { icon: <Youtube size={18} />, label: 'Videos', count: 156, color: 'text-red-500' },
    { icon: <FileText size={18} />, label: 'Documents', count: 89, color: 'text-blue-500' },
    { icon: <Twitter size={18} />, label: 'Tweets', count: 234, color: 'text-sky-500' },
    { icon: <Link size={18} />, label: 'Bookmarks', count: 67, color: 'text-purple-500' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Search Your Second Brain</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Search across all your digital knowledge using AI-powered semantic search
        </p>
      </div>

      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {searchStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className={`flex items-center space-x-2 ${stat.color} mb-2`}>
              {stat.icon}
              <span className="font-medium">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.count}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Search Results</h2>
        </div>
        <div className="p-4">
          <SearchResults />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;