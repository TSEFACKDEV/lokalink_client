import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useAppStore } from '../store/appStore';
import { equipementService, categoryService } from '../services/api';

const AddProductPage = () => {
  const { isDarkMode, setIsLoading, user } = useAppStore();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    categorie: '',
    prixParJour: '',
    caution: '',
    proprietaire: user?._id || '507f1f77bcf86cd799439011', // ID temporaire pour test
    images: [],
    localisation: {
      adresse: '',
      ville: '',
      codePostal: '',
      pays: 'Cameroun',
    },
    conditionsUtilisation: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('localisation.')) {
      const locField = name.replace('localisation.', '');
      setFormData((prev) => ({
        ...prev,
        localisation: {
          ...prev.localisation,
          [locField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageUrlAdd = (e) => {
    e.preventDefault();
    const urlInput = document.getElementById('imageUrl');
    const url = urlInput.value.trim();
    
    if (url && !images.includes(url)) {
      setImages([...images, url]);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, url],
      }));
      urlInput.value = '';
    }
  };

  const handleImageRemove = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validation
      if (!formData.nom || !formData.categorie || !formData.prixParJour) {
        alert('Veuillez remplir tous les champs obligatoires');
        setIsLoading(false);
        return;
      }

      const dataToSubmit = {
        ...formData,
        prixParJour: parseFloat(formData.prixParJour),
        caution: parseFloat(formData.caution) || 0,
      };

      const res = await equipementService.createEquipement(dataToSubmit);
      
      if (res.data && res.data.data) {
        alert('Équipement ajouté avec succès !');
        navigate('/equipements');
      } else {
        alert('Erreur lors de l\'ajout de l\'équipement');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-gray-50'} py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Ajouter un nouvel équipement
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Remplissez les détails ci-dessous pour mettre votre équipement en location et commencer à gagner de l'argent.
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className={`rounded-3xl shadow-2xl overflow-hidden border ${
          isDarkMode 
            ? 'bg-gray-800/80 backdrop-blur-xl border-gray-700' 
            : 'bg-white/80 backdrop-blur-xl border-white/50'
        }`}>
          
          {/* Section 1: Informations de base */}
          <div className="p-8 md:p-10 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mr-4 shadow-lg shadow-primary/30">1</div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Informations Générales</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Nom de l'équipement <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Caméra Sony A7III"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all outline-none ${
                    isDarkMode 
                      ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Catégorie <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <select
                    name="categorie"
                    value={formData.categorie}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 appearance-none transition-all outline-none ${
                      isDarkMode 
                        ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white' 
                        : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                    }`}
                  >
                    <option value="">Sélectionner une catégorie</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>{cat.nom}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Prix par jour (FCFA) <span className="text-primary">*</span>
                </label>
                <input
                  type="number"
                  name="prixParJour"
                  value={formData.prixParJour}
                  onChange={handleChange}
                  required
                  min="0"
                  placeholder="0"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all outline-none ${
                    isDarkMode 
                      ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div className="md:col-span-2">
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Décrivez les caractéristiques, l'état et les accessoires inclus..."
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all outline-none resize-none ${
                    isDarkMode 
                      ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Localisation & Détails */}
          <div className="p-8 md:p-10 border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mr-4 shadow-lg shadow-primary/30">2</div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Localisation & Détails</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Adresse complète
                </label>
                <input
                  type="text"
                  name="localisation.adresse"
                  value={formData.localisation.adresse}
                  onChange={handleChange}
                  placeholder="Ex: Quartier Bastos, Rue 123"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all outline-none ${
                    isDarkMode 
                      ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white placeholder-gray-500' 
                      : 'bg-white border-gray-200 focus:border-primary text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Ville
                </label>
                <input
                  type="text"
                  name="localisation.ville"
                  value={formData.localisation.ville}
                  onChange={handleChange}
                  placeholder="Ex: Yaoundé"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all outline-none ${
                    isDarkMode 
                      ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white placeholder-gray-500' 
                      : 'bg-white border-gray-200 focus:border-primary text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Caution (FCFA)
                </label>
                <input
                  type="number"
                  name="caution"
                  value={formData.caution}
                  onChange={handleChange}
                  min="0"
                  placeholder="0"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all outline-none ${
                    isDarkMode 
                      ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white placeholder-gray-500' 
                      : 'bg-white border-gray-200 focus:border-primary text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Section 3: Images */}
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mr-4 shadow-lg shadow-primary/30">3</div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Photos</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-3">
                <input
                  type="url"
                  id="imageUrl"
                  placeholder="https://exemple.com/image.jpg"
                  className={`flex-1 px-5 py-4 rounded-xl border-2 transition-all outline-none ${
                    isDarkMode 
                      ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900 placeholder-gray-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={handleImageUrlAdd}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primaryHover transition-all shadow-lg shadow-primary/30 flex items-center"
                >
                  <FaPlus className="mr-2" /> Ajouter
                </button>
              </div>

              {images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative group aspect-square rounded-xl overflow-hidden shadow-md">
                      <img
                        src={img}
                        alt={`Aperçu ${index}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => handleImageRemove(index)}
                          className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors shadow-lg transform hover:scale-110"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`text-center py-12 border-2 border-dashed rounded-xl ${isDarkMode ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-400'}`}>
                  <p>Aucune image ajoutée. Ajoutez des URLs d'images ci-dessus.</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-8 md:p-10 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primaryHover transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-1"
            >
              Publier l'annonce
            </button>
            <button
              type="button"
              onClick={() => navigate('/equipements')}
              className={`flex-1 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900'
              }`}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
