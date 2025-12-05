import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun, FaPlus } from 'react-icons/fa';
import { useAppStore } from '../store/appStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode, toggleDarkMode } = useAppStore();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isDarkMode ? 'bg-dark/90 backdrop-blur-md border-gray-800' : 'bg-white/90 backdrop-blur-md border-gray-100'} border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              L
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-dark'}`}>Lokalink</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/equipements"
              className={`text-sm font-semibold transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Équipements
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-semibold transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-semibold transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Contact
            </Link>

            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

            {/* Bouton Ajouter un équipement */}
            <Link
              to="/add-product"
              className="bg-dark text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10 flex items-center space-x-2 hover:-translate-y-0.5"
            >
              <FaPlus className="text-sm" />
              <span>Louer mon matériel</span>
            </Link>

            {/* Bouton Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button 
              onClick={toggleMenu} 
              className={`text-2xl ${isDarkMode ? 'text-white' : 'text-dark'}`}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden absolute top-20 left-0 w-full p-4 shadow-xl border-b ${isDarkMode ? 'bg-dark border-gray-800' : 'bg-white border-gray-100'}`}>
            <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="block px-4 py-3 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/equipements"
              className="block px-4 py-3 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Équipements
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-3 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/add-product"
              className="block px-4 py-3 text-base font-medium bg-primary text-white rounded-xl text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Louer mon matériel
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
