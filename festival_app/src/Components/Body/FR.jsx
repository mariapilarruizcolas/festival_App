import React from 'react';
import './FR.css';
import img1 from '../../pictures/img1.png';
import img2 from '../../pictures/img2.webp';

const FR = () => {
    return (
        <section className="container-fr">
            <div className="container-fr-left">
            <div className="container-card-left">
                <div className="image-fr-left">
                    <img src={img1} alt="" />
                </div>
            <div className="container-btn-right">
                <span className="btn-left">En savoir plus</span>
            </div>
            </div>
            </div>
            <div className="container-fr-right">
                <div className="container-card-right">
            <div className="container-btn-left">
                <span className="btn-left">En savoir plus</span>
            </div>
                <div className="image-fr-right">
                <img src={img2} alt="" />
                </div>
            </div>
            </div>
        </section>
    );
};

export default FR;