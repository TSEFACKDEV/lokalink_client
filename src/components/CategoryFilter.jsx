import React from 'react';
import { useAppStore } from '../store/appStore';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const { isDarkMode } = useAppStore();

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-primary">Catégories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange('')}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === ''
              ? 'bg-primary text-white'
              : isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Toutes les catégories
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => onCategoryChange(category._id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category._id
                ? 'bg-primary text-white'
                : isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category.nom}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
