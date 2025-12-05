import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useAppStore } from '../store/appStore';
import { categoryService } from '../services/api';

const SearchBar = ({ onSearch, placeholder = 'Rechercher des équipements...' }) => {
  const { isDarkMode } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

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

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, selectedCategory);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onSearch(searchTerm, category);
  };

  return (
    <div className="relative w-full">
      <div className={`flex items-center rounded-xl border-2 px-5 py-3 transition-all ${
        isDarkMode ? 'bg-gray-700 border-gray-600 focus-within:border-primary' : 'bg-gray-100 border-gray-200 focus-within:border-primary'
      }`}>
        <FaSearch className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearch}
          className={`w-full ml-3 border-none outline-none bg-transparent ${
            isDarkMode ? 'text-light placeholder-gray-400' : 'text-dark placeholder-gray-600'
          }`}
        />

        <div className={`h-6 w-px mx-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>

        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={`border-none outline-none bg-transparent cursor-pointer text-sm ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          style={{ maxWidth: '150px' }}
        >
          <option value="">Toutes catégories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.nom}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
