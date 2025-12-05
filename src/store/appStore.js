import { create } from 'zustand';

export const useAppStore = create((set) => ({
  // Dark mode
  isDarkMode: localStorage.getItem('darkMode') === 'true' || false,
  setDarkMode: (isDark) => {
    localStorage.setItem('darkMode', isDark);
    set({ isDarkMode: isDark });
  },
  toggleDarkMode: () => set((state) => {
    const newValue = !state.isDarkMode;
    localStorage.setItem('darkMode', newValue);
    return { isDarkMode: newValue };
  }),

  // Équipements
  equipements: [],
  selectedEquipement: null,
  setEquipements: (equipements) => set({ equipements }),
  setSelectedEquipement: (equipement) => set({ selectedEquipement: equipement }),

  // Catégories
  categories: [],
  setCategories: (categories) => set({ categories }),

  // Filtres
  filters: {
    search: '',
    category: '',
    availability: '',
    priceRange: [0, 10000],
    page: 1,
  },
  setFilters: (filters) => set({ filters }),
  setFilter: (key, value) => set((state) => ({
    filters: { ...state.filters, [key]: value },
  })),

  // Réservations
  reservations: [],
  setReservations: (reservations) => set({ reservations }),

  // Utilisateur connecté
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),

  // État de chargement
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),

  // Erreurs
  error: null,
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));

export default useAppStore;
