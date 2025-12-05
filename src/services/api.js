import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/lokalink/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Services pour les équipements
export const equipementService = {
  getAllEquipements: (page = 1, limit = 20, filters = {}) => 
    api.get('/equipements', { 
      params: { page, limit, ...filters } 
    }),
  
  searchEquipements: (query, filters = {}) => 
    api.get('/equipements', { 
      params: { search: query, ...filters } 
    }),
  
  getEquipementById: (id) => 
    api.get(`/equipements/${id}`),
  
  createEquipement: (data) => 
    api.post('/equipements', data),
  
  updateEquipement: (id, data) => 
    api.put(`/equipements/${id}`, data),
  
  deleteEquipement: (id) => 
    api.delete(`/equipements/${id}`),
  
  updateAvailability: (id, disponibilite) => 
    api.patch(`/equipements/${id}/availability`, { disponibilite }),
};

// Services pour les catégories
export const categoryService = {
  getAllCategories: () => 
    api.get('/category'),
  
  getCategoryById: (id) => 
    api.get(`/category/${id}`),
  
  createCategory: (data) => 
    api.post('/category', data),
  
  updateCategory: (id, data) => 
    api.put(`/category/${id}`, data),
  
  deleteCategory: (id) => 
    api.delete(`/category/${id}`),
};

// Services pour les réservations
export const reservationService = {
  getAllReservations: () => 
    api.get('/reservations'),
  
  getReservationById: (id) => 
    api.get(`/reservations/${id}`),
  
  createReservation: (data) => 
    api.post('/reservations', data),
  
  confirmReservation: (id) => 
    api.patch(`/reservations/${id}/confirm`),
  
  cancelReservation: (id) => 
    api.patch(`/reservations/${id}/cancel`),
  
  completeReservation: (id) => 
    api.patch(`/reservations/${id}/complete`),
  
  updatePaymentStatus: (id, data) => 
    api.patch(`/reservations/${id}/payment`, data),
};

// Services pour les PME
export const pmeService = {
  getAllPMEs: () => 
    api.get('/pmes'),
  
  getPMEById: (id) => 
    api.get(`/pmes/${id}`),
  
  createPME: (data) => 
    api.post('/pmes', data),
  
  updatePME: (id, data) => 
    api.put(`/pmes/${id}`, data),
  
  deletePME: (id) => 
    api.delete(`/pmes/${id}`),
};

// Services pour les avis
export const avisService = {
  getAllAvis: () => 
    api.get('/avis'),
  
  getAvisById: (id) => 
    api.get(`/avis/${id}`),
  
  createAvis: (data) => 
    api.post('/avis', data),
  
  updateAvis: (id, data) => 
    api.put(`/avis/${id}`, data),
  
  deleteAvis: (id) => 
    api.delete(`/avis/${id}`),
};

export default api;
