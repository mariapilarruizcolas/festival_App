import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Accueil from '../src/Screen/Accueil.jsx'
import Festivals from './Screen/Festivals'
import OuFaireLaFete from './Screen/OuFaireLaFete';
import Compagnie from './Screen/Compagnie';
import Login from './Screen/Login';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Accueil/>} />
      <Route path="/Festivals" element={<Festivals/>} />
      <Route path="/OuFaireLaFete" element={<OuFaireLaFete/>} />
      <Route path="/Compagnie" element={<Compagnie/>} />
      <Route path="/Login" element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
