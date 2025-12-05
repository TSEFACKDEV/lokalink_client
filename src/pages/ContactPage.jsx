import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar, FaPaperPlane, FaClock } from 'react-icons/fa';
import { useAppStore } from '../store/appStore';
import axios from 'axios';

const ContactPage = () => {
  const { isDarkMode } = useAppStore();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/lokalink/v1/contact`, formData);
      
      if (response.data.success) {
        setIsSubmitted(true);
        setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setError(err.response?.data?.message || 'Une erreur est survenue lors de l\'envoi du message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-gray-50'} pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">
            Contactez-nous
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Une question ? Un projet ? Notre équipe est là pour vous accompagner dans votre expérience de location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info Card */}
          <div className={`lg:col-span-1 p-8 rounded-3xl shadow-xl h-fit ${
            isDarkMode ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700' : 'bg-white/80 backdrop-blur-md border border-white/50'
          }`}>
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="bg-primary/10 p-2 rounded-lg text-primary mr-3">
                <FaPaperPlane />
              </span>
              Nos Coordonnées
            </h2>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaPhone />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Téléphone</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>+237 6XX XXX XXX</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Lun-Ven, 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>contact@lokalink.cm</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Bureau</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Yaoundé, Cameroun<br />
                    Quartier Bastos
                  </p>
                </div>
              </div>
            </div>

            <div className={`mt-10 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <FaClock className="mr-2 text-primary" /> Horaires
              </h3>
              <ul className={`space-y-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </li>
                <li className="flex justify-between text-red-500">
                  <span>Dimanche</span>
                  <span className="font-medium">Fermé</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 p-8 md:p-10 rounded-3xl shadow-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h2 className="text-3xl font-bold mb-8 text-primary">Envoyez-nous un message</h2>

            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mb-6 animate-bounce">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Message Envoyé !</h3>
                <p className="text-gray-500 max-w-md">
                  Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-primary font-semibold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Nom Complet</label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-4 rounded-xl border-2 outline-none transition-all ${
                        isDarkMode 
                          ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white' 
                          : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                      }`}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-4 rounded-xl border-2 outline-none transition-all ${
                        isDarkMode 
                          ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white' 
                          : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                      }`}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Téléphone</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 outline-none transition-all ${
                        isDarkMode 
                          ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white' 
                          : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                      }`}
                      placeholder="+237..."
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Sujet</label>
                    <input
                      type="text"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-4 rounded-xl border-2 outline-none transition-all ${
                        isDarkMode 
                          ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white' 
                          : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                      }`}
                      placeholder="Sujet de votre message"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-5 py-4 rounded-xl border-2 outline-none transition-all resize-none ${
                      isDarkMode 
                        ? 'bg-gray-900/50 border-gray-600 focus:border-primary text-white' 
                        : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                    }`}
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primaryHover transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Envoi en cours...' : 'Envoyer le Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jean Dupont',
                role: 'Photographe',
                rating: 5,
                comment: 'Service excellent, équipements de qualité ! La location s\'est passée sans accroc.',
              },
              {
                name: 'Marie Claude',
                role: 'Organisatrice',
                rating: 5,
                comment: 'Très pratique et économique. Je recommande vivement pour tous vos événements.',
              },
              {
                name: 'André Tagne',
                role: 'Réalisateur',
                rating: 5,
                comment: 'Plateforme sécurisée et équipe très réactive. Une vraie solution pour les pros.',
              },
            ].map((review, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg transition-transform hover:-translate-y-2 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className={`mb-6 italic text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{review.comment}"
                </p>
                <div>
                  <p className="text-primary font-bold text-lg">{review.name}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
