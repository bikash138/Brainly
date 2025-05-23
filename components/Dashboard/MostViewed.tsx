import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';

interface PopularItemProps {
  title: string;
  views: number;
  type: string;
}

const PopularItem: React.FC<PopularItemProps> = ({ title, views, type }) => (
  <div className="flex items-center justify-between py-2.5 group">
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{title}</p>
      <div className="flex items-center mt-1">
        <span className="text-xs text-gray-500 dark:text-gray-400">{type}</span>
        <span className="mx-1.5 text-gray-300 dark:text-gray-600">•</span>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <Eye size={12} className="mr-1" />
          {views} views
        </div>
      </div>
    </div>
    <ArrowRight size={16} className="text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
  </div>
);

const MostViewed: React.FC = () => {
  // Sample data for most viewed items
  const popularItems = [
    {
      title: 'Building a Personal Knowledge Management System',
      views: 124,
      type: 'YouTube Video'
    },
    {
      title: 'How to Take Smart Notes - Book Summary',
      views: 98,
      type: 'PDF Document'
    },
    {
      title: 'Productivity system walkthrough thread',
      views: 86,
      type: 'Twitter Thread'
    },
    {
      title: 'Notion Template for Second Brain',
      views: 65,
      type: 'URL Bookmark'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
      <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Most Viewed</h2>
      </div>
      <div className="p-4 divide-y divide-gray-100 dark:divide-gray-700">
        {popularItems.map((item, index) => (
          <PopularItem
            key={index}
            title={item.title}
            views={item.views}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default MostViewed;