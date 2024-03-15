import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import "./styles/main.css";
import Accueil from "./pages/Accueil";
import Mariage from "./pages/Mariage";
import Soirees from "./pages/Soirees";
import Evenement from "./pages/Evenement";
import Erreur from "./pages/Erreur";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/mariage" element={<Mariage />} />
        <Route path='/soirees' element={<Soirees />} />
        <Route path='/evenement' element={<Evenement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
