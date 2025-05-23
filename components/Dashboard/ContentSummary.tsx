import React from 'react';
import { 
  FileText, 
  Youtube, 
  Twitter, 
  Bookmark 
} from 'lucide-react';

const ContentSummary: React.FC = () => {
  // Sample data for content summary
  const summaryItems = [
    {
      title: 'YouTube Videos',
      count: 32,
      icon: <Youtube size={20} className="text-red-500" />,
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
      textColor: 'text-red-700 dark:text-red-300'
    },
    {
      title: 'PDF Documents',
      count: 45,
      icon: <FileText size={20} className="text-blue-500" />,
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-700 dark:text-blue-300'
    },
    {
      title: 'Twitter Posts',
      count: 19,
      icon: <Twitter size={20} className="text-sky-500" />,
      bgColor: 'bg-sky-50 dark:bg-sky-900/20',
      borderColor: 'border-sky-200 dark:border-sky-800',
      textColor: 'text-sky-700 dark:text-sky-300'
    },
    {
      title: 'Bookmarks',
      count: 28,
      icon: <Bookmark size={20} className="text-purple-500" />,
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-700 dark:text-purple-300'
    }
  ];

  return (
    <>
      {summaryItems.map((item, index) => (
        <div 
          key={index} 
          className={`p-4 rounded-lg border ${item.borderColor} ${item.bgColor} shadow-sm transition-transform duration-300 hover:scale-105`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {item.icon}
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.title}</h3>
                <p className={`text-2xl font-bold ${item.textColor}`}>{item.count}</p>
              </div>
            </div>
            <div className="ml-auto">
              <span className="text-xs font-medium text-teal-600 dark:text-teal-400">+12% ↑</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContentSummary;