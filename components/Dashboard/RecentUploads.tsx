import React from 'react';
import { ArrowRight, Youtube, FileText, Twitter, ExternalLink } from 'lucide-react';

interface ContentCardProps {
  type: 'youtube' | 'pdf' | 'twitter';
  title: string;
  date: string;
  thumbnail?: string;
  url: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ type, title, date, thumbnail, url }) => {
  const iconMap = {
    youtube: <Youtube size={16} className="text-red-500" />,
    pdf: <FileText size={16} className="text-blue-500" />,
    twitter: <Twitter size={16} className="text-sky-500" />
  };

  return (
    <div className="group flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
      {thumbnail ? (
        <div className="w-12 h-12 mr-3 rounded-md overflow-hidden flex-shrink-0">
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-12 h-12 mr-3 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
          {iconMap[type]}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <span className="mr-2">{iconMap[type]}</span>
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{title}</p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
      </div>
      <a 
        href={url} 
        className="ml-2 p-1.5 rounded-full text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
        title="Open content"
      >
        <ExternalLink size={16} />
      </a>
    </div>
  );
};

const RecentUploads: React.FC = () => {
  // Sample data for recent uploads
  const recentUploads = [
    {
      type: 'youtube' as const,
      title: 'How to Build a Second Brain - Tiago Forte',
      date: 'Added 2 hours ago',
      thumbnail: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100',
      url: '#'
    },
    {
      type: 'pdf' as const,
      title: 'Digital Minimalism - Cal Newport (Book Summary)',
      date: 'Added yesterday',
      url: '#'
    },
    {
      type: 'twitter' as const,
      title: 'Thread on productivity systems by @james_clear',
      date: 'Added 2 days ago',
      url: '#'
    },
    {
      type: 'youtube' as const,
      title: 'The PARA Method Explained - Personal Knowledge Management',
      date: 'Added 3 days ago',
      thumbnail: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100',
      url: '#'
    },
    {
      type: 'pdf' as const,
      title: 'Atomic Habits - Summary Notes and Key Takeaways',
      date: 'Added 5 days ago',
      url: '#'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
      <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Uploads</h2>
        <a 
          href="#" 
          className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center group"
        >
          View all
          <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
      <div className="p-4 space-y-3">
        {recentUploads.map((item, index) => (
          <ContentCard
            key={index}
            type={item.type}
            title={item.title}
            date={item.date}
            thumbnail={item.thumbnail}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentUploads;