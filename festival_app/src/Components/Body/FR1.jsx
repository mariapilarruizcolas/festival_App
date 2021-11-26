import React from 'react';
import './FR1.css';
import img3 from '../../pictures/img3.webp';
import img4 from '../../pictures/img4.png';

const FR1 = () => {
    return (
        <section className="container-fr1">
            <div className="container-fr1-left">
            <div className="container-card-left">
                <div className="image-fr1-left">
                    <img src={img3} alt="" />
                </div>
            <div className="container-btn-right">
                <span className="btn-left">En savoir plus</span>
            </div>
            </div>
            </div>
            <div className="container-fr1-right">
                <div className="container-card-right">
            <div className="container-btn-left">
                <span className="btn-left">En savoir plus</span>
            </div>
                <div className="image-fr1-right">
                <img src={img4} alt="" />
                </div>
            </div>
            </div>
        </section>
    );
};

export default FR1;