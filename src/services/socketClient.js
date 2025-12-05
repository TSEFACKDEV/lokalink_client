import io from 'socket.io-client';

/**
 * Service de connexion Socket.IO côté client
 * Gère la communication en temps réel avec le serveur
 */

let socket = null;
let isConnected = false;

/**
 * Initialise la connexion Socket.IO
 */
export const initializeSocket = (userId, userEmail, userName) => {
  if (socket && isConnected) {
    console.log('Socket déjà connecté');
    return socket;
  }

  const serverUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  socket = io(serverUrl, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
    transports: ['websocket', 'polling'],
  });

  /**
   * Événement: Connexion établie
   */
  socket.on('connect', () => {
    console.log('✅ Connecté au serveur Socket.IO');
    isConnected = true;

    // Envoyer les infos utilisateur
    socket.emit('user:connect', {
      userId,
      userEmail,
      userName,
    });
  });

  /**
   * Événement: Déconnexion
   */
  socket.on('disconnect', () => {
    console.log('❌ Déconnecté du serveur Socket.IO');
    isConnected = false;
  });

  /**
   * Événement: Erreur de connexion
   */
  socket.on('connect_error', (error) => {
    console.error('❌ Erreur de connexion Socket.IO:', error);
  });

  return socket;
};

/**
 * Récupère l'instance socket
 */
export const getSocket = () => {
  return socket;
};

/**
 * Vérifie si la connexion est établie
 */
export const isSocketConnected = () => {
  return isConnected && socket?.connected;
};

/**
 * Envoie un événement au serveur
 */
export const emitEvent = (eventName, data) => {
  if (isSocketConnected()) {
    socket.emit(eventName, data);
  } else {
    console.warn(`Socket non connecté. Impossible d'envoyer: ${eventName}`);
  }
};

/**
 * Écoute un événement depuis le serveur
 */
export const onEvent = (eventName, callback) => {
  if (socket) {
    socket.on(eventName, callback);
  }
};

/**
 * Arrête d'écouter un événement
 */
export const offEvent = (eventName, callback) => {
  if (socket) {
    socket.off(eventName, callback);
  }
};

/**
 * Déconnecte le socket
 */
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    isConnected = false;
    console.log('Socket déconnecté');
  }
};

/**
 * Hook pour écouter les notifications d'ordre
 */
export const onOrderNotification = (callback) => {
  onEvent('notification:order', callback);
};

/**
 * Hook pour écouter les notifications de paiement
 */
export const onPaymentNotification = (callback) => {
  onEvent('notification:payment', callback);
};

/**
 * Hook pour écouter les notifications de produit
 */
export const onProductNotification = (callback) => {
  onEvent('notification:product', callback);
};

/**
 * Hook pour écouter les notifications de réservation
 */
export const onReservationNotification = (callback) => {
  onEvent('notification:reservation', callback);
};

/**
 * Hook pour écouter les notifications d'avis
 */
export const onReviewNotification = (callback) => {
  onEvent('notification:review', callback);
};

/**
 * Hook pour écouter les notifications de statut
 */
export const onStatusNotification = (callback) => {
  onEvent('notification:status', callback);
};

/**
 * Hook pour écouter les notifications personnalisées
 */
export const onCustomNotification = (callback) => {
  onEvent('notification:custom', callback);
};

/**
 * Hook pour écouter les notifications broadcast
 */
export const onBroadcastNotification = (callback) => {
  onEvent('notification:broadcast', callback);
};

/**
 * Hook pour écouter les mises à jour utilisateur
 */
export const onUserStatusChange = (callback) => {
  onEvent('user:online', callback);
  onEvent('user:offline', callback);
};

export default {
  initializeSocket,
  getSocket,
  isSocketConnected,
  emitEvent,
  onEvent,
  offEvent,
  disconnectSocket,
  onOrderNotification,
  onPaymentNotification,
  onProductNotification,
  onReservationNotification,
  onReviewNotification,
  onStatusNotification,
  onCustomNotification,
  onBroadcastNotification,
  onUserStatusChange,
};
