import React from 'react';
import './FR2.css';
import img5 from '../../pictures/img5.png';
import img6 from '../../pictures/img6.png';

const FR2 = () => {
    return (
        <section className="container-fr2">
            <div className="container-fr2-left">
            <div className="container-card-left">
                <div className="image-fr2-left">
                    <img src={img5} alt="" />
                </div>
            <div className="container-btn-right">
                <span className="btn-left">En savoir plus</span>
            </div>
            </div>
            </div>
            <div className="container-fr2-right">
                <div className="container-card-right">
            <div className="container-btn-left">
                <span className="btn-left">En savoir plus</span>
            </div>
                <div className="image-fr2-right">
                <img src={img6} alt="" />
                </div>
            </div>
            </div>
        </section>
    );
};

export default FR2;