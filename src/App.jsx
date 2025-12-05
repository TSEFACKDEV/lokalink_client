import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppStore } from './store/appStore';

// Composants
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import EquipementsPage from './pages/EquipementsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import AddProductPage from './pages/AddProductPage';
import BorrowEquipmentPage from './pages/BorrowEquipmentPage';
import EquipementDetailPage from './pages/EquipementDetailPage';

function App() {
  const { isDarkMode } = useAppStore();

  useEffect(() => {
    // Appliquer le dark mode au document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-dark text-light' : 'bg-light text-dark'}`}>
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/equipements" element={<EquipementsPage />} />
            <Route path="/equipement/:id" element={<EquipementDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/borrow-equipment/:id" element={<BorrowEquipmentPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
