import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { MemoryRouter } from 'react-router-dom';
import LanguageProvider from './contexts/LanguageContext';

function App() {

  return (
    <>
      <MemoryRouter>
        <LanguageProvider>
          <Navbar />
          <main>
            <Dashboard />
          </main>
          <Footer />
        </LanguageProvider>
      </MemoryRouter>
    </>
  );
}

export default App;
