import React from 'react';
import { useAppStore } from '../store/appStore';

const LoadingSpinner = () => {
  const { isDarkMode } = useAppStore();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className={`absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin ${isDarkMode ? 'border-l-gray-700' : 'border-l-gray-200'}`}></div>
        <div className="flex items-center justify-center h-full">
          <span className="text-primary font-bold">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
