import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}

export default App;
