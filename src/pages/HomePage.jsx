import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaImage } from 'react-icons/fa';
import { useAppStore } from '../store/appStore';
import { equipementService, categoryService } from '../services/api';
import EquipementCard from '../components/EquipementCard';
import LoadingSpinner from '../components/LoadingSpinner';
import CategoryBar from '../components/CategoryBar';

const HomePage = () => {
  const { isDarkMode, setEquipements, setCategories, isLoading, setIsLoading } = useAppStore();
  const [equipements, setLocalEquipements] = useState([]);
  const [categories, setLocalCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Récupérer les catégories
        const categoriesRes = await categoryService.getAllCategories();
        if (categoriesRes.data && categoriesRes.data.data) {
          setLocalCategories(categoriesRes.data.data);
          setCategories(categoriesRes.data.data);
        }

        // Récupérer 4 équipements
        const equipementsRes = await equipementService.getAllEquipements(1, 4);
        if (equipementsRes.data && equipementsRes.data.data) {
          setLocalEquipements(equipementsRes.data.data.equipements);
          setEquipements(equipementsRes.data.data.equipements);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setEquipements, setCategories, setIsLoading]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden pt-20 pb-32 ${isDarkMode ? 'bg-dark' : 'bg-surface'}`}>
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-red-500 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in space-y-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span>La référence au Cameroun</span>
              </div>
              
              <h1 className={`text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                Louez tout, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  simplement.
                </span>
              </h1>
              
              <p className={`text-xl leading-relaxed max-w-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                La plateforme tout-en-un pour louer du matériel professionnel ou rentabiliser vos équipements dormants. Simple, sécurisé et rapide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/equipements"
                  className="btn-primary flex items-center justify-center space-x-2 text-lg"
                >
                  <span>Explorer le catalogue</span>
                  <FaArrowRight className="text-sm" />
                </Link>
                <Link
                  to="/add-product"
                  className="btn-secondary flex items-center justify-center space-x-2 text-lg"
                >
                  <span>Mettre en location</span>
                </Link>
              </div>

              <div className="pt-8 flex items-center space-x-8 text-sm font-medium text-gray-500">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Vérifié</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Sécurisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>

            <div className="slide-in relative">
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl border-8 ${isDarkMode ? 'border-gray-800' : 'border-white'}`}>
                <div className={`aspect-[4/3] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center`}>
                  {/* Placeholder for Hero Image - Replace with actual image */}
                  <div className="text-center p-12">
                    <FaImage className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-400 font-medium">Image d'illustration</p>
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className={`absolute -bottom-8 -left-8 p-6 rounded-2xl shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} max-w-xs animate-bounce-slow`}>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Revenus générés</p>
                    <p className="text-xl font-bold text-dark">+ 150.000 FCFA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barre de Catégories */}
      <div className="-mt-8 relative z-20 max-w-7xl mx-auto px-4">
        <div className={`rounded-2xl shadow-xl p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <CategoryBar />
        </div>
      </div>

      {/* Caractéristiques */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-dark'}`}>
              Pourquoi choisir Lokalink ?
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Nous simplifions la location d'équipements pour les professionnels et les particuliers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Simple et Rapide',
                description: 'Une interface intuitive pour trouver ou louer du matériel en quelques clics.',
                icon: '🚀'
              },
              {
                title: '100% Sécurisé',
                description: 'Paiements sécurisés et vérification d\'identité pour une tranquillité d\'esprit totale.',
                icon: '🔒'
              },
              {
                title: 'Économique',
                description: 'Louer plutôt que d\'acheter, économisez jusqu\'à 70% sur vos besoins',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <FaCheckCircle className="text-4xl text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipements en Vedette */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-primary">Équipements en Vedette</h2>
            <Link
              to="/equipements"
              className="text-primary hover:text-accent font-bold flex items-center space-x-2"
            >
              <span>Voir tous</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipements.map((equipement) => (
              <EquipementCard key={equipement._id} equipement={equipement} />
            ))}
          </div>

          {equipements.length === 0 && (
            <div className={`text-center py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="text-lg">Aucun équipement disponible pour le moment</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 ${isDarkMode ? 'bg-gradient-to-r from-primary to-accent' : 'bg-gradient-to-r from-primary to-accent'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à Commencer ?</h2>
          <p className="text-lg text-white mb-8 opacity-90">
            Rejoignez des milliers d'utilisateurs qui font confiance à Lokalink
          </p>
          <Link
            to="/add-product"
            className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
          >
            Commencer Maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
