import { useState, useEffect } from 'react';
import type { NavPage } from './types';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { BookingPage } from './pages/BookingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';

import { initScrollSmoother, smoothGlideTo } from './utils/scrollSmoother';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string>('junior-academy');

  // Initialize Lenis Scroll Smoother on mount
  useEffect(() => {
    const cleanup = initScrollSmoother();
    return cleanup;
  }, []);

  // Glide gracefully to top whenever page changes
  useEffect(() => {
    smoothGlideTo(0, { duration: 0.8 });
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setSelectedProgramId={setSelectedProgramId}
          />
        );
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'programs':
        return (
          <ProgramsPage
            setCurrentPage={setCurrentPage}
            setSelectedProgramId={setSelectedProgramId}
            selectedProgramId={selectedProgramId}
          />
        );
      case 'booking':
        return (
          <BookingPage
            setCurrentPage={setCurrentPage}
            selectedProgramId={selectedProgramId}
          />
        );
      case 'testimonials':
        return <TestimonialsPage setCurrentPage={setCurrentPage} />;
      case 'products':
        return <ProductsPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-brand-light font-sans selection:bg-brand-purple-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Mobile Slide-Out Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Slide-Out Shopping Cart Drawer */}
      <CartDrawer />

      {/* Main Page Body */}
      <main className="flex-1 w-full pb-16">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
