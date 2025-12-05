// Utilitaires et helpers

/**
 * Formater une date au format locale français
 * @param {Date|string} date
 * @returns {string}
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Formater une devise en euros
 * @param {number} value
 * @returns {string}
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
};

/**
 * Calculer le nombre de jours entre deux dates
 * @param {Date|string} startDate
 * @param {Date|string} endDate
 * @returns {number}
 */
export const calculateDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return Math.max(0, days);
};

/**
 * Obtenir le statut de disponibilité avec couleur
 * @param {string} availability
 * @returns {object}
 */
export const getAvailabilityStatus = (availability) => {
  const statuses = {
    disponible: { label: 'Disponible', color: 'green', icon: '✓' },
    reserve: { label: 'Réservé', color: 'yellow', icon: '⏳' },
    indisponible: { label: 'Indisponible', color: 'red', icon: '✗' },
    en_maintenance: { label: 'En maintenance', color: 'orange', icon: '🔧' },
  };
  return statuses[availability] || statuses.indisponible;
};

/**
 * Valider une adresse email
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valider un numéro de téléphone camerounais
 * @param {string} phone
 * @returns {boolean}
 */
export const isValidPhoneCM = (phone) => {
  const phoneRegex = /^(\+237|00237)?[2367]\d{8}$/;
  return phoneRegex.test(phone.replace(/[\s\-]/g, ''));
};

/**
 * Limiter une chaîne de caractères
 * @param {string} text
 * @param {number} limit
 * @returns {string}
 */
export const truncateText = (text, limit = 100) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + '...';
};

/**
 * Obtenir les initiales d'un nom
 * @param {string} name
 * @returns {string}
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
};

/**
 * Générer un ID unique
 * @returns {string}
 */
export const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Formater la taille de fichier
 * @param {number} bytes
 * @returns {string}
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Retarder une exécution (pour debounce, etc.)
 * @param {number} ms
 * @returns {Promise}
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  formatDate,
  formatCurrency,
  calculateDays,
  getAvailabilityStatus,
  isValidEmail,
  isValidPhoneCM,
  truncateText,
  getInitials,
  generateUniqueId,
  formatFileSize,
  delay,
};
