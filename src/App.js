import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { MemoryRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <MemoryRouter>
      <Navbar />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </MemoryRouter>
    </>
  );
}

export default App;
