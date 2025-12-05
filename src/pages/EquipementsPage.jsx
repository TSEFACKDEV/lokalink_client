import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import { equipementService, categoryService } from '../services/api';
import EquipementCard from '../components/EquipementCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import { FaFilter, FaSearch, FaBoxOpen } from 'react-icons/fa';

const EquipementsPage = () => {
  const { isDarkMode, setIsLoading, isLoading } = useAppStore();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [equipements, setEquipements] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [availability, setAvailability] = useState(searchParams.get('availability') || '');

  const ITEMS_PER_PAGE = 20;

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

  useEffect(() => {
    const fetchEquipements = async () => {
      setIsLoading(true);
      try {
        const filters = {
          ...(searchTerm && { search: searchTerm }),
          ...(selectedCategory && { category: selectedCategory }),
          ...(availability && { availability }),
        };

        const res = await equipementService.getAllEquipements(currentPage, ITEMS_PER_PAGE, filters);
        
        if (res.data && res.data.data) {
          setEquipements(res.data.data.equipements);
          setTotalPages(Math.ceil(res.data.data.pagination?.total / ITEMS_PER_PAGE) || 1);
        }

        // Mettre à jour les URL parameters
        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        if (selectedCategory) params.append('category', selectedCategory);
        if (availability) params.append('availability', availability);
        params.append('page', currentPage);
        setSearchParams(params);
      } catch (error) {
        console.error('Erreur lors du chargement des équipements:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEquipements();
  }, [currentPage, searchTerm, selectedCategory, availability, setSearchParams, setIsLoading]);

  const handleSearch = (term, category) => {
    setSearchTerm(term);
    if (category !== undefined) {
      setSelectedCategory(category);
    }
    setCurrentPage(1);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleAvailabilityChange = (availabilityValue) => {
    setAvailability(availabilityValue);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading && equipements.length === 0) return <LoadingSpinner />;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-gray-50'} pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Catalogue des Équipements
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explorez notre vaste sélection de matériel professionnel pour tous vos besoins.
          </p>
        </div>

        {/* Barre de Filtres */}
        <div className={`mb-10 p-6 rounded-3xl shadow-xl backdrop-blur-md border ${
          isDarkMode 
            ? 'bg-gray-800/80 border-gray-700' 
            : 'bg-white/80 border-white/50'
        }`}>
          <div className="flex items-center mb-4 text-primary font-bold text-lg">
            <FaFilter className="mr-2" /> Filtres & Recherche
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Recherche par nom */}
            <div className="md:col-span-5">
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Rechercher
              </label>
              <div className="relative">
                <SearchBar onSearch={handleSearch} placeholder="Caméra, Micro, Trépied..." />
              </div>
            </div>

            {/* Filtrer par catégorie */}
            <div className="md:col-span-4">
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Catégorie
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all cursor-pointer appearance-none ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border-gray-600 text-white focus:border-primary' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary'
                }`}
              >
                <option value="">Toutes les catégories</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.nom}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtrer par disponibilité */}
            <div className="md:col-span-3">
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Disponibilité
              </label>
              <select
                value={availability}
                onChange={(e) => handleAvailabilityChange(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all cursor-pointer appearance-none ${
                  isDarkMode 
                    ? 'bg-gray-900/50 border-gray-600 text-white focus:border-primary' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary'
                }`}
              >
                <option value="">Tous</option>
                <option value="disponible">Disponible</option>
                <option value="indisponible">Indisponible</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contenu Principal */}
        <div>
          {/* Grille d'équipements */}
          {equipements.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                {equipements.map((equipement) => (
                  <EquipementCard key={equipement._id} equipement={equipement} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          ) : (
            <div className={`flex flex-col items-center justify-center py-20 rounded-3xl border-2 border-dashed ${
              isDarkMode ? 'border-gray-700 bg-gray-800/30' : 'border-gray-300 bg-gray-50'
            }`}>
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
                isDarkMode ? 'bg-gray-800 text-gray-600' : 'bg-gray-200 text-gray-400'
              }`}>
                <FaBoxOpen className="text-5xl" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Aucun équipement trouvé
              </h3>
              <p className={`text-lg max-w-md text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Nous n'avons pas trouvé d'équipement correspondant à vos critères. Essayez de modifier vos filtres.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setAvailability('');
                }}
                className="mt-8 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primaryHover transition-all shadow-lg shadow-primary/30"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EquipementsPage;
