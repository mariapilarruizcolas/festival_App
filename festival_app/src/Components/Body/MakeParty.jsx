import "./MakeParty.css";
import React from "react";
import artifice2 from '../../pictures/artifice2.svg'
import Switch from "./Switch";

const MakeParty = () => {
  return (
    <div className="container-MakeParty">
      {/* form */}
      <div className="container-form-party">
        <div className="container-preferences">

          <div className="pays-party">
            <div className="pays"> <p>Pays :</p></div>
            <input type="text" className="pays-input" />
          </div>

          <div className="bars"></div>

          <div className="ville-party">
          <div className="ville"> <p>Ville :</p></div>
            <input type="text" className="ville-input" />
          </div>

          <div className="bars"></div>

          <div className="date-party">
          <div className="date"> <p>date :</p></div>
            <input type="text" className="date-input" />
          </div>

          <div className="bars"></div>

          <div className="style-party">
          <div className="style"> <p>Style :</p></div>
            <input type="text" className="style-input" />
          </div>

          <div className="bars"></div>

          <div className="durée-party">
          <div className="durée"> <p>durée :</p></div>
            <input type="text" className="durée-input" />
          </div>

          <div className="bars"></div>

          <div className="parking-party">
          <div className="parking"> <p>parking :</p></div>
          <div className="switch-container">
            <Switch />
          </div>
          </div>

          <div className="bars"></div>


        </div>
        </div>
        {/* BTN PARTY */}
        <span className="button-preferences">
          <span className="btn">Let's Travel  !</span>
          <img src={artifice2} alt="" />
        </span>
    </div>
  );
};

export default MakeParty;
