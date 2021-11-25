import React from "react";
import "../Body/Title.css";
import pic1 from '../../pictures/pic1.png'

const Title = () => {
  return (
    <main className="container-title">
      <div className="name-app">
        <h1>Festival&Friends</h1>
      </div>
      <div className="left-pic">
        {/* <div className="enAttendant1"></div> */}
        <img src={pic1} className="pic-left" alt="pic of pic" />

      </div>
      <div className="trouve-fest">
          <h2>Trouves ton festival !</h2>
      </div>
      <div className="right-pic">
        {/* <div className="enAttendant2"></div> */}
        <img src={pic1} className="pic-right" alt="pic of pic" />
      </div>
    </main>
  );
};

export default Title;
