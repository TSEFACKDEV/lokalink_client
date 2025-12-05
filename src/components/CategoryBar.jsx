import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTools, FaLaptop, FaCar, FaHome, FaMusic, 
  FaCamera, FaDumbbell, FaBaby, FaBook, FaPaintBrush 
} from 'react-icons/fa';
import { useAppStore } from '../store/appStore';
import { categoryService } from '../services/api';

// Map icons to category names
const categoryIcons = {
  'Outils': FaTools,
  'Électronique': FaLaptop,
  'Véhicules': FaCar,
  'Maison': FaHome,
  'Musique': FaMusic,
  'Photo/Vidéo': FaCamera,
  'Sport': FaDumbbell,
  'Enfants': FaBaby,
  'Livres': FaBook,
  'Art': FaPaintBrush,
};

const CategoryBar = () => {
  const { isDarkMode } = useAppStore();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await categoryService.getAllCategories();
        if (res.data && res.data.data) {
          setCategories(res.data.data);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des catégories:', error);
      }
    };

    fetchCategories();
  }, []);

  const getIcon = (categoryName) => {
    const IconComponent = categoryIcons[categoryName] || FaTools;
    return IconComponent;
  };

  return (
    <div className={`py-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} border-y ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Explorez par catégorie
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const IconComponent = getIcon(category.nom);
            
            return (
              <Link
                key={category._id}
                to={`/equipements?category=${category._id}`}
                className={`group flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-primary hover:shadow-2xl'
                    : 'bg-white hover:bg-primary hover:shadow-2xl'
                } transform hover:scale-105`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-colors ${
                  isDarkMode
                    ? 'bg-gray-600 group-hover:bg-white'
                    : 'bg-gray-100 group-hover:bg-white'
                }`}>
                  <IconComponent className={`text-3xl transition-colors ${
                    isDarkMode
                      ? 'text-primary group-hover:text-primary'
                      : 'text-primary group-hover:text-primary'
                  }`} />
                </div>
                
                <span className={`font-semibold text-center transition-colors ${
                  isDarkMode
                    ? 'text-gray-200 group-hover:text-white'
                    : 'text-gray-700 group-hover:text-white'
                }`}>
                  {category.nom}
                </span>
                
                {category.description && (
                  <span className={`text-xs text-center mt-1 transition-colors ${
                    isDarkMode
                      ? 'text-gray-400 group-hover:text-gray-200'
                      : 'text-gray-500 group-hover:text-gray-100'
                  }`}>
                    {category.description}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
