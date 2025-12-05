import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaStar, FaMapMarkerAlt, FaCalendarAlt, 
  FaShieldAlt, FaCheckCircle, FaTimesCircle, FaUser, FaTag, FaInfoCircle 
} from 'react-icons/fa';
import { useAppStore } from '../store/appStore';
import { equipementService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const EquipementDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, setIsLoading, isLoading } = useAppStore();
  const [equipement, setEquipement] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchEquipement = async () => {
      setIsLoading(true);
      try {
        const res = await equipementService.getEquipementById(id);
        if (res.data && res.data.data) {
          setEquipement(res.data.data);
        } else {
          navigate('/equipements');
        }
      } catch (error) {
        console.error('Erreur lors du chargement de l\'équipement:', error);
        navigate('/equipements');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEquipement();
  }, [id, navigate, setIsLoading]);

  if (isLoading || !equipement) return <LoadingSpinner />;

  const isAvailable = equipement.disponibilite === 'disponible';
  const price = equipement.prixParJour || equipement.prix || 0;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark text-white' : 'bg-gray-50 text-gray-900'} pt-24 pb-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Back */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <button
            onClick={() => navigate(-1)}
            className={`flex items-center space-x-2 text-sm font-medium ${isDarkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-500 hover:text-primary'} transition-colors`}
          >
            <FaArrowLeft />
            <span>Retour aux équipements</span>
          </button>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Images */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              {equipement.images && equipement.images.length > 0 ? (
                <img
                  src={equipement.images[selectedImage]}
                  alt={equipement.nom}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-lg">Aucune image disponible</span>
                </div>
              )}
              
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-md ${
                  isAvailable 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-red-500/90 text-white'
                }`}>
                  {isAvailable ? <FaCheckCircle className="mr-2" /> : <FaTimesCircle className="mr-2" />}
                  {isAvailable ? 'Disponible' : 'Indisponible'}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {equipement.images && equipement.images.length > 1 && (
              <div className="grid grid-cols-5 gap-4">
                {equipement.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? 'ring-4 ring-primary ring-offset-2 ring-offset-transparent scale-95'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${equipement.nom} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Description & Details */}
            <div className={`p-8 rounded-3xl shadow-lg ${isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'bg-white border border-gray-100'}`}>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaInfoCircle className="text-primary mr-3" />
                Description
              </h2>
              <p className={`leading-relaxed text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {equipement.description || "Aucune description fournie pour cet équipement."}
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <h3 className="font-semibold mb-2 text-primary flex items-center">
                    <FaTag className="mr-2" /> Catégorie
                  </h3>
                  <p className="font-medium">{equipement.categorie?.nom || 'Non classé'}</p>
                </div>
                <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <h3 className="font-semibold mb-2 text-primary flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> Localisation
                  </h3>
                  <p className="font-medium">{equipement.localisation?.adresse || equipement.localisation || 'Non spécifiée'}</p>
                </div>
              </div>
              
              {equipement.conditionsUtilisation && (
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-primary mb-3">Conditions d'utilisation</h3>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {equipement.conditionsUtilisation}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-1">
            <div className={`sticky top-28 p-8 rounded-3xl shadow-xl border ${
              isDarkMode 
                ? 'bg-gray-800/80 backdrop-blur-md border-gray-700' 
                : 'bg-white/80 backdrop-blur-md border-gray-100'
            }`}>
              <h1 className="text-3xl font-extrabold mb-2">{equipement.nom}</h1>
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  ({equipement.nombreAvis || 0} avis)
                </span>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">{price} FCFA</span>
                <span className={`text-lg ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>/ jour</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className={`flex items-center p-3 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Assurance incluse</p>
                    <p className="text-xs opacity-70">Protection contre les dommages</p>
                  </div>
                </div>
                
                {equipement.proprietaire && (
                  <div className={`flex items-center p-3 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <FaUser />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{equipement.proprietaire.nom || 'Propriétaire'}</p>
                      <p className="text-xs opacity-70">Identité vérifiée</p>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to={`/borrow-equipment/${equipement._id}`}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center ${
                  isAvailable 
                    ? 'bg-primary text-white hover:bg-primaryHover shadow-primary/30' 
                    : 'bg-gray-400 cursor-not-allowed text-gray-200'
                }`}
                onClick={(e) => !isAvailable && e.preventDefault()}
              >
                <FaCalendarAlt className="mr-2" />
                {isAvailable ? 'Réserver maintenant' : 'Indisponible'}
              </Link>
              
              <p className="text-center mt-4 text-sm opacity-60">
                Aucun paiement n'est débité pour le moment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipementDetailPage;
