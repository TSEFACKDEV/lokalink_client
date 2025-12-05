import axios from 'axios';
import { API_CONFIG } from '../utils/constants';

// Créer l'instance Axios
const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur de requête
api.interceptors.request.use(
  (config) => {
    // Ajouter le token s'il existe
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('📤 Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Intercepteur de réponse
api.interceptors.response.use(
  (response) => {
    console.log('📥 Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    if (error.response) {
      // Erreur de réponse du serveur
      console.error('❌ Response Error:', error.response.status, error.response.data);

      if (error.response.status === 401) {
        // Non authentifié
        localStorage.removeItem('token');
        window.location.href = '/login';
      } else if (error.response.status === 403) {
        // Non autorisé
        console.error('Accès refusé');
      } else if (error.response.status === 404) {
        // Non trouvé
        console.error('Ressource non trouvée');
      } else if (error.response.status >= 500) {
        // Erreur serveur
        console.error('Erreur serveur');
      }
    } else if (error.request) {
      // Pas de réponse
      console.error('❌ No response received:', error.request);
    } else {
      // Erreur lors de la configuration
      console.error('❌ Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
