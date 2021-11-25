import React from 'react';
import './App.css';
//import NewUserForm from './Components/NewUserForm';
//simport ConnectionPage from './Components/ConnectionPage';
import { Routes, Route } from 'react-router-dom'
import Accueil from '../src/Screen/Accueil.jsx'
import Login from './Screen/Login';

function App() {
  return (
    <div className="App">
         
     <Routes>
      <Route exact path="/" element={<Accueil/>} />
      <Route  path="/Login" element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
