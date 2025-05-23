import React from 'react';
import { Folder, ArrowRight } from 'lucide-react';

interface CategoryItemProps {
  name: string;
  count: number;
  color: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, count, color }) => (
  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 group">
    <div className="flex items-center">
      <div className={`w-8 h-8 rounded-md ${color} flex items-center justify-center mr-3`}>
        <Folder size={16} className="text-white" />
      </div>
      <span className="text-sm font-medium text-gray-900 dark:text-white">{name}</span>
    </div>
    <div className="flex items-center">
      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mr-2">
        {count}
      </span>
      <ArrowRight size={16} className="text-gray-400 dark:text-gray-500 transition-transform duration-300 group-hover:translate-x-1" />
    </div>
  </div>
);

const ContentCategories: React.FC = () => {
  // Sample data for categories
  const categories = [
    { name: 'Productivity', count: 28, color: 'bg-teal-500' },
    { name: 'Programming', count: 45, color: 'bg-blue-500' },
    { name: 'Personal Development', count: 32, color: 'bg-purple-500' },
    { name: 'Business', count: 19, color: 'bg-amber-500' },
    { name: 'Health & Fitness', count: 12, color: 'bg-green-500' },
    { name: 'Design', count: 23, color: 'bg-rose-500' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
      <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Categories</h2>
        <a 
          href="#" 
          className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center group"
        >
          View all
          <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            name={category.name}
            count={category.count}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCategories;