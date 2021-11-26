import React from 'react';
import NavBar from '../Components/Header/NavBar';
import Footer from '../Components/Footer/Footer';
import FR from '../Components/Body/FR'
import FR1 from '../Components/Body/FR1';
import FR2 from '../Components/Body/FR2';

const Festivals = () => {
    return (
        <div>
            <NavBar />
            <FR />
            <FR1 />
            <FR2 />
            <Footer />
        </div>
    );
};

export default Festivals;