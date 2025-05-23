import React from 'react';
import { BarChart2 } from 'lucide-react';

const InsightsSummary: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
      <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Insights</h2>
      </div>
      <div className="p-4">
        <div className="relative h-36 w-full">
          {/* Placeholder for chart */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
            <BarChart2 size={32} className="mb-2" />
            <p className="text-sm text-center">Analytics data will appear here</p>
          </div>
          
          {/* Content type distribution - simplified visual representation */}
          <div className="absolute bottom-0 left-0 right-0 flex h-6 rounded-lg overflow-hidden">
            <div className="h-full bg-red-400 w-2/6" title="YouTube: 32%"></div>
            <div className="h-full bg-blue-400 w-3/12" title="PDFs: 25%"></div>
            <div className="h-full bg-sky-400 w-1/6" title="Twitter: 16%"></div>
            <div className="h-full bg-purple-400 w-1/12" title="Bookmarks: 8%"></div>
            <div className="h-full bg-teal-400 w-1/5" title="Notes: 19%"></div>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
              <span className="text-xs text-gray-600 dark:text-gray-300">Total Content Items</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">124</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-xs text-gray-600 dark:text-gray-300">Added This Week</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">14</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
              <span className="text-xs text-gray-600 dark:text-gray-300">Total Views</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">873</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
              <span className="text-xs text-gray-600 dark:text-gray-300">Tagged Items</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">98</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsSummary;