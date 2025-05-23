import React from 'react';
import { Youtube, FileText, Link, Twitter, PenTool } from 'lucide-react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, color, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center p-3 rounded-lg w-full transition-all duration-200 ${color} hover:opacity-90 hover:scale-105 transform`}
  >
    <span className="mr-3 text-white">{icon}</span>
    <span className="text-sm font-medium text-white">{label}</span>
  </button>
);

const QuickActions: React.FC = () => {
  const handleAction = (action: string) => {
    console.log(`Action clicked: ${action}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
      <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Quick Actions</h2>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        <ActionButton
          icon={<Youtube size={18} />}
          label="Add YouTube Video"
          color="bg-red-500"
          onClick={() => handleAction('youtube')}
        />
        <ActionButton
          icon={<FileText size={18} />}
          label="Upload PDF"
          color="bg-blue-500"
          onClick={() => handleAction('pdf')}
        />
        <ActionButton
          icon={<Twitter size={18} />}
          label="Save Twitter Post"
          color="bg-sky-500"
          onClick={() => handleAction('twitter')}
        />
        <ActionButton
          icon={<Link size={18} />}
          label="Add URL Bookmark"
          color="bg-purple-500"
          onClick={() => handleAction('bookmark')}
        />
        <ActionButton
          icon={<PenTool size={18} />}
          label="Create Quick Note"
          color="bg-teal-500"
          onClick={() => handleAction('note')}
        />
      </div>
    </div>
  );
};

export default QuickActions;