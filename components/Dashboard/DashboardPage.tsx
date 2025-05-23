import React from 'react';
import ContentSummary from './ContentSummary';
import RecentUploads from './RecentUploads';
import ContentCategories from './ContentCategories';
import QuickActions from './QuickActions';
import MostViewed from './MostViewed';
import InsightsSummary from './InsightsSummary';

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ContentSummary />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RecentUploads />
          <ContentCategories />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <MostViewed />
          <InsightsSummary />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;