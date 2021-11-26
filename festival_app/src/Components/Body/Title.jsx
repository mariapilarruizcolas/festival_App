import React from "react";
import "../Body/Title.css";
import pic1 from '../../pictures/pic1.png'
import pic2 from '../../pictures/pic2.png'
import svgTitle from '../../pictures/artifice.svg'

const Title = () => {
  return (
    <main className="container-title">
      <div className="name-app">
        <h1>Festival&Friends</h1>
        <img src={svgTitle} alt="pic" />
      </div>
      <div className="left-pic">
        <img src={pic1} className="pic-left" alt="pic of pic" />

      </div>
      <div className="trouve-fest">
          <h2>Trouves ton festival!</h2>
      </div>
      <div className="right-pic">
        <img src={pic2} className="pic-right" alt="pic of pic" />
      </div>
    </main>
  );
};

export default Title;
