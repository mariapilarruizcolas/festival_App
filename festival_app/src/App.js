import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Accueil from '../src/Screen/Accueil.jsx'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Accueil/>} />
     </Routes>
    </div>
  );
}

export default App;
