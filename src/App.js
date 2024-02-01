import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import Footer from './components/Footer';
import './App.css';
// import React from 'react';
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import NucampLogo from './app/assets/img/logo.png';
// import CampsiteCard from './features/campsites/CampsiteCard.js';
// import CampsitesList from './features/campsites/CampsitesList.js';
// import { CAMPSITES } from './app/shared/CAMPSITES';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route 
          path='directory/:campsiteId' 
          element={<CampsiteDetailPage />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

