import React from 'react';
import './App.css';
import NewUserForm from './Components/NewUserForm';
import ConnectionPage from './Components/ConnectionPage';
import { Routes, Route } from 'react-router-dom'
import Accueil from '../src/Screen/Accueil.jsx'

function App() {
  return (
    <div className="App">
     <ConnectionPage />

     
     <Routes>
      <Route exact path="/" element={<Accueil/>} />
     </Routes>
    </div>
  );
}

export default App;
