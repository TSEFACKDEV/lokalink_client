import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useAppStore } from '../store/appStore';

const Footer = () => {
  const { isDarkMode } = useAppStore();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDarkMode ? 'bg-dark border-gray-800' : 'bg-white border-gray-100'} border-t pt-16 pb-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* À propos */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-dark'}`}>Lokalink</span>
            </Link>
            <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              La première plateforme de location entre particuliers et professionnels au Cameroun. Simple, rapide et sécurisé.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`text-xl transition-colors ${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-primary'}`}>
                <FaFacebook />
              </a>
              <a href="#" className={`text-xl transition-colors ${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-primary'}`}>
                <FaTwitter />
              </a>
              <a href="#" className={`text-xl transition-colors ${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-primary'}`}>
                <FaInstagram />
              </a>
              <a href="#" className={`text-xl transition-colors ${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-primary'}`}>
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Liens */}
          <div>
            <h4 className={`font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-dark'}`}>Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-primary'}`}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/equipements" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-primary'}`}>
                  Catalogue
                </Link>
              </li>
              <li>
                <Link to="/add-product" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-primary'}`}>
                  Louer mon matériel
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-primary'}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className={`font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-dark'}`}>Légal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-primary'}`}>
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-primary'}`}>
                  Conditions d'Utilisation
                </Link>
              </li>
              <li>
                <Link to="/faq" className={`text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-primary'}`}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-dark'}`}>Restez informé</h4>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Inscrivez-vous à notre newsletter pour recevoir les dernières offres.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className={`px-4 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                    : 'bg-gray-50 border-gray-200 text-dark placeholder-gray-400'
                }`}
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primaryHover transition-colors">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className={`pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-100'} text-center`}>
          <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            &copy; {currentYear} Lokalink. Tous droits réservés. Fait avec ❤️ au Cameroun.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
