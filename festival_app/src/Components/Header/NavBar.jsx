import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>                    
                <li>
                    <Link to="/OuFaireLaFete">Ou faire la fête ?</Link>
                </li>  
                <li>
                    <Link to="/Compagnie">T'as pas d'amis ?</Link>
                </li>   
                <li>
                    <Link to="/Login">S'inscrire</Link>
                </li>  
            </ul>
        </nav>
    </header>
    );
};

export default NavBar;