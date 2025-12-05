import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaInfoCircle, FaMoneyBillWave } from 'react-icons/fa';
import { useAppStore } from '../store/appStore';
import { equipementService, reservationService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const BorrowEquipmentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, setIsLoading, isLoading } = useAppStore();

  const [equipement, setEquipement] = useState(null);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    dateDebut: '',
    dateFin: '',
    notes: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(0);

  useEffect(() => {
    const fetchEquipement = async () => {
      setIsLoading(true);
      try {
        const res = await equipementService.getEquipementById(id);
        if (res.data && res.data.data) {
          setEquipement(res.data.data);
        }
      } catch (error) {
        console.error('Erreur lors du chargement de l\'équipement:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchEquipement();
  }, [id, setIsLoading]);

  useEffect(() => {
    // Calculer le prix total
    if (formData.dateDebut && formData.dateFin && equipement) {
      const start = new Date(formData.dateDebut);
      const end = new Date(formData.dateFin);
      const diffTime = Math.abs(end - start);
      const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Include start day
      
      if (days > 0 && end >= start) {
        setNumberOfDays(days);
        setTotalPrice(days * equipement.prixParJour + equipement.caution);
      } else {
        setNumberOfDays(0);
        setTotalPrice(0);
      }
    }
  }, [formData.dateDebut, formData.dateFin, equipement]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.nom || !formData.email || !formData.dateDebut || !formData.dateFin) {
        alert('Veuillez remplir tous les champs obligatoires');
        setIsLoading(false);
        return;
      }

      const reservationData = {
        equipement: id,
        locataire: {
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
        },
        dateDebut: new Date(formData.dateDebut),
        dateFin: new Date(formData.dateFin),
        prixTotal: totalPrice,
        notes: formData.notes,
      };

      const res = await reservationService.createReservation(reservationData);
      
      if (res.data && res.data.data) {
        alert('Réservation créée avec succès ! Veuillez procéder au paiement.');
        navigate('/equipements');
      } else {
        alert('Erreur lors de la création de la réservation');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading || !equipement) return <LoadingSpinner />;

  const isAvailable = equipement.disponibilite === 'disponible';

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-gray-50'} pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Détails de l'Équipement */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Card */}
            <div className={`p-8 rounded-3xl shadow-xl backdrop-blur-md border ${
              isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-white/50'
            }`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">{equipement.nom}</h1>
                  {equipement.categorie?.nom && (
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {equipement.categorie.nom}
                    </span>
                  )}
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-3xl font-bold text-primary">{equipement.prixParJour} FCFA</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>par jour</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className={`flex items-center px-4 py-2 rounded-full ${
                  isAvailable ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-2 ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="font-bold">{isAvailable ? 'Disponible' : 'Indisponible'}</span>
                </div>
                {equipement.noteMoyenne > 0 && (
                  <div className="flex items-center text-yellow-400">
                    <FaStar className="mr-1" />
                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {equipement.noteMoyenne.toFixed(1)}
                    </span>
                    <span className={`ml-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      ({equipement.nombreAvis} avis)
                    </span>
                  </div>
                )}
              </div>

              {equipement.images && equipement.images.length > 0 && (
                <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                  <img
                    src={equipement.images[0]}
                    alt={equipement.nom}
                    className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="prose max-w-none">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Description</h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {equipement.description || 'Aucune description disponible.'}
                </p>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className={`p-8 rounded-3xl shadow-xl backdrop-blur-md border ${
              isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-white/50'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Détails & Conditions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <FaMoneyBillWave />
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Caution</h4>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {equipement.caution > 0 ? `${equipement.caution} FCFA` : 'Aucune caution requise'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Localisation</h4>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {equipement.localisation?.adresse || 'Non spécifiée'}
                      {equipement.localisation?.ville && `, ${equipement.localisation.ville}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-start md:col-span-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <FaInfoCircle />
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Conditions</h4>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {equipement.conditionsUtilisation || 'Conditions standard de la plateforme.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Réservation */}
          <div className="lg:col-span-1">
            <div className={`sticky top-24 p-8 rounded-3xl shadow-2xl border ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <h2 className="text-2xl font-bold text-primary mb-6">Finaliser la Location</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Du
                    </label>
                    <input
                      type="date"
                      name="dateDebut"
                      value={formData.dateDebut}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-3 py-2 rounded-xl border-2 outline-none transition-all text-sm ${
                        isDarkMode 
                          ? 'bg-gray-900/50 border-gray-600 text-white focus:border-primary' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Au
                    </label>
                    <input
                      type="date"
                      name="dateFin"
                      value={formData.dateFin}
                      onChange={handleChange}
                      required
                      min={formData.dateDebut || new Date().toISOString().split('T')[0]}
                      className={`w-full px-3 py-2 rounded-xl border-2 outline-none transition-all text-sm ${
                        isDarkMode 
                          ? 'bg-gray-900/50 border-gray-600 text-white focus:border-primary' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary'
                      }`}
                    />
                  </div>
                </div>

                {/* Coordonnées */}
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Vos Coordonnées
                  </label>
                  <div className="space-y-3">
                    <div className="relative">
                      <FaUser className={`absolute left-3 top-3.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        placeholder="Nom complet"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 outline-none transition-all ${
                          isDarkMode 
                            ? 'bg-gray-900/50 border-gray-600 text-white focus:border-primary' 
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary'
                        }`}
                      />
                    </div>
                    <div className="relative">
                      <FaEnvelope className={`absolute left-3 top-3.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 outline-none transition-all ${
                          isDarkMode 
                            ? 'bg-gray-900/50 border-gray-600 text-white focus:border-primary' 
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary'
                        }`}
                      />
                    </div>
                    <div className="relative">
                      <FaPhone className={`absolute left-3 top-3.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="Téléphone"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 outline-none transition-all ${
                          isDarkMode 
                            ? 'bg-gray-900/50 border-gray-600 text-white focus:border-primary' 
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Message (Optionnel)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all resize-none ${
                      isDarkMode 
                        ? 'bg-gray-900/50 border-gray-600 text-white focus:border-primary' 
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary'
                    }`}
                    placeholder="Précisions sur la location..."
                  />
                </div>

                {/* Résumé Prix */}
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Durée</span>
                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{numberOfDays} jours</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Prix / jour</span>
                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{equipement.prixParJour} FCFA</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Caution</span>
                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{equipement.caution} FCFA</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-2 pt-2 flex justify-between items-center">
                    <span className="font-bold text-lg text-primary">Total</span>
                    <span className="font-bold text-xl text-primary">{totalPrice} FCFA</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !isAvailable}
                  className="w-full bg-primary text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-primaryHover transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? 'Traitement...' : 'Confirmer la Location'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowEquipmentPage;
