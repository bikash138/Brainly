import React from 'react';
import { FileText, Youtube, Twitter, Link, Clock } from 'lucide-react';

interface SearchResultProps {
  type: 'youtube' | 'pdf' | 'twitter' | 'bookmark';
  title: string;
  excerpt: string;
  relevanceScore: number;
  date: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ type, title, excerpt, relevanceScore, date }) => {
  const iconMap = {
    youtube: <Youtube size={16} className="text-red-500" />,
    pdf: <FileText size={16} className="text-blue-500" />,
    twitter: <Twitter size={16} className="text-sky-500" />,
    bookmark: <Link size={16} className="text-purple-500" />
  };

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {iconMap[type]}
          <h3 className="text-base font-medium text-gray-900 dark:text-white">{title}</h3>
        </div>
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
          {Math.round(relevanceScore * 100)}% match
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{excerpt}</p>
      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
        <Clock size={12} className="mr-1" />
        <span>{date}</span>
      </div>
    </div>
  );
};

const SearchResults: React.FC = () => {
  // Sample search results - this will be replaced with actual RAG results
  const results: SearchResultProps[] = [
    {
      type: 'youtube',
      title: 'Building a Second Brain - Complete Method',
      excerpt: 'Learn how to build a comprehensive second brain system for managing your digital knowledge...',
      relevanceScore: 0.95,
      date: '2 days ago'
    },
    {
      type: 'pdf',
      title: 'Note-Taking Best Practices',
      excerpt: 'A comprehensive guide to effective note-taking strategies and knowledge management...',
      relevanceScore: 0.88,
      date: '1 week ago'
    },
    {
      type: 'twitter',
      title: 'Thread: Knowledge Management Tips',
      excerpt: 'Key insights on building a personal knowledge management system that works for you...',
      relevanceScore: 0.82,
      date: '3 days ago'
    }
  ];

  return (
    <div className="space-y-4">
      {results.map((result, index) => (
        <SearchResult key={index} {...result} />
      ))}
    </div>
  );
};

export default SearchResults;