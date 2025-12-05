// Constantes globales de l'application

// Configuration API
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/lokalink/v1',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
};

// Pagination
export const PAGINATION = {
  ITEMS_PER_PAGE: 20,
  MAX_PAGES: 100,
};

// Couleurs de la marque
export const COLORS = {
  PRIMARY: '#FF8C42',      // Orange Lokalink
  ACCENT: '#FF6B35',       // Orange foncé
  DARK: '#1A1A1A',         // Noir
  LIGHT: '#FFFFFF',        // Blanc
  GRAY_50: '#F9FAFB',
  GRAY_100: '#F3F4F6',
  GRAY_200: '#E5E7EB',
  GRAY_300: '#D1D5DB',
  GRAY_400: '#9CA3AF',
  GRAY_500: '#6B7280',
  GRAY_600: '#4B5563',
  GRAY_700: '#374151',
  GRAY_800: '#1F2937',
  GRAY_900: '#111827',
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  INFO: '#3B82F6',
};

// États de disponibilité
export const AVAILABILITY_STATUS = {
  AVAILABLE: 'disponible',
  RESERVED: 'reserve',
  UNAVAILABLE: 'indisponible',
  MAINTENANCE: 'en_maintenance',
};

// Statuts de réservation
export const RESERVATION_STATUS = {
  PENDING: 'en_attente',
  CONFIRMED: 'confirmee',
  CANCELLED: 'annulee',
  COMPLETED: 'completee',
};

// Statuts de paiement
export const PAYMENT_STATUS = {
  PENDING: 'en_attente',
  PAID: 'payee',
  FAILED: 'echouee',
  REFUNDED: 'remboursee',
};

// Messages
export const MESSAGES = {
  SUCCESS: {
    CREATED: 'Créé avec succès !',
    UPDATED: 'Mis à jour avec succès !',
    DELETED: 'Supprimé avec succès !',
    RESERVATION_CREATED: 'Réservation créée avec succès !',
    EQUIPMENT_ADDED: 'Équipement ajouté avec succès !',
  },
  ERROR: {
    NETWORK: 'Erreur de connexion. Veuillez réessayer.',
    UNAUTHORIZED: 'Vous devez être connecté pour effectuer cette action.',
    FORBIDDEN: 'Vous n\'avez pas la permission d\'accéder à cette ressource.',
    NOT_FOUND: 'La ressource demandée n\'existe pas.',
    SERVER_ERROR: 'Erreur serveur. Veuillez réessayer plus tard.',
    VALIDATION: 'Veuillez vérifier vos données.',
  },
  INFO: {
    LOADING: 'Chargement en cours...',
    NO_DATA: 'Aucune donnée disponible.',
    EMPTY_SEARCH: 'Aucun résultat pour votre recherche.',
  },
};

// Chemins des routes
export const ROUTES = {
  HOME: '/',
  EQUIPEMENTS: '/equipements',
  EQUIPEMENT_DETAIL: '/equipements/:id',
  BORROW_EQUIPMENT: '/borrow-equipment/:id',
  ADD_PRODUCT: '/add-product',
  CONTACT: '/contact',
  PRIVACY: '/privacy-policy',
  TERMS: '/terms-of-service',
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
};

// Validation des formulaires
export const VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MIN_DESCRIPTION_LENGTH: 10,
  MAX_DESCRIPTION_LENGTH: 5000,
  MIN_PRICE: 0,
  MAX_PRICE: 1000000,
  MIN_PASSWORD_LENGTH: 6,
  MAX_PASSWORD_LENGTH: 50,
};

// Délais
export const DELAYS = {
  DEBOUNCE: 300,
  THROTTLE: 500,
  NOTIFICATION: 5000,
  API_TIMEOUT: 30000,
};

// Types de notifications
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

// Locales
export const LOCALES = {
  DEFAULT: 'fr-FR',
  DATE_FORMAT: 'dd/MM/yyyy',
  TIME_FORMAT: 'HH:mm',
  DATETIME_FORMAT: 'dd/MM/yyyy HH:mm',
};

// Storage keys
export const STORAGE_KEYS = {
  THEME: 'lokalink_theme',
  USER: 'lokalink_user',
  TOKEN: 'lokalink_token',
  PREFERENCES: 'lokalink_preferences',
  CART: 'lokalink_cart',
};

// Features flags
export const FEATURES = {
  AUTHENTICATION: true,
  PAYMENT: false,
  REVIEWS: true,
  MESSAGING: false,
  NOTIFICATIONS: true,
};

export default {
  API_CONFIG,
  PAGINATION,
  COLORS,
  AVAILABILITY_STATUS,
  RESERVATION_STATUS,
  PAYMENT_STATUS,
  MESSAGES,
  ROUTES,
  VALIDATION,
  DELAYS,
  NOTIFICATION_TYPES,
  LOCALES,
  STORAGE_KEYS,
  FEATURES,
};
