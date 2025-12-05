import React from 'react';
import { FaStar, FaMapMarkerAlt, FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/appStore';

const EquipementCard = ({ equipement }) => {
  const { isDarkMode } = useAppStore();
  const isAvailable = equipement.disponibilite === 'disponible';

  return (
    <Link to={`/equipement/${equipement._id}`} className="group">
      <div
        className={`h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
            : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
        }`}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900">
          {equipement.images && equipement.images.length > 0 ? (
            <img
              src={equipement.images[0]}
              alt={equipement.nom}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <FaImage className="text-4xl opacity-50" />
            </div>
          )}

          {/* Badge de disponibilité */}
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md ${
              isAvailable 
                ? 'bg-green-500/90 text-white' 
                : 'bg-red-500/90 text-white'
            }`}>
              {isAvailable ? 'Disponible' : 'Loué'}
            </span>
          </div>
          
          {/* Badge Catégorie */}
          {equipement.categorie?.nom && (
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-black/50 text-white backdrop-blur-md">
                {equipement.categorie.nom}
              </span>
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="p-5 flex flex-col h-[calc(100%-aspect-[4/3])]">
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className={`text-lg font-bold truncate pr-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {equipement.nom}
              </h3>
            </div>

            <p className={`text-sm line-clamp-2 mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {equipement.description || 'Aucune description disponible.'}
            </p>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Prix par jour</span>
                <span className="text-xl font-bold text-primary">{equipement.prixParJour.toLocaleString()} FCFA</span>
              </div>
              
              {equipement.noteMoyenne > 0 && (
                <div className="flex items-center space-x-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
                  <FaStar className="text-yellow-400 text-xs" />
                  <span className={`text-sm font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                    {equipement.noteMoyenne.toFixed(1)}
                  </span>
                </div>
              )}
            </div>
            
            {equipement.localisation?.adresse && (
              <div className={`flex items-center space-x-1.5 mt-3 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                <FaMapMarkerAlt className="flex-shrink-0" />
                <span className="truncate">{equipement.localisation.adresse}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EquipementCard;
