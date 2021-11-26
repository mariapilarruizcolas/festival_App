import React from "react";
import "../Footer/Footer.css";

import insta from "../../pictures/insta.png";
import youtube from "../../pictures/youtube.png";
import facebook from "../../pictures/facebook.png";

const Footer = () => {
  return (
    <footer>
      <div className="social-networks">
        <div className="insta">
          <img src={insta} alt="insta" className="insta-img" />
        </div>
        <div className="youtube">
          <img
            src={youtube}
            alt="youtube"
            className="youtube-img" width="35" height="35"
          />
        </div>
        <div className="facebook">
          <img
            src={facebook}
            alt="facebook"
            className="facebook-img"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
