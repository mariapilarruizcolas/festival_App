import React from 'react';
import './MakeFriends.css';

const MakeFriends = () => {
    return (
        <div className="container-MakeFriends">
      {/* form */}
      <div className="container-form-friends">
        <div className="container-preferences-friends">

          <div className="sexe-friends">
            <div className="sexe"> <p>Pays :</p></div>
            <input type="text" className="sexe-input" />
          </div>

          <div className="bars"></div>

          <div className="age-friends">
          <div className="age"> <p>date :</p></div>
            <input type="text" className="age-input" />
          </div>

          <div className="bars"></div>

          <div className="style-friends">
          <div className="style"> <p>Age :</p></div>
            <input type="text" className="style-input" />
          </div>

          <div className="bars"></div>

          <div className="lieu-friends">
          <div className="lieu"> <p>Style :</p></div>
            <input type="text" className="lieu-input" />
          </div>

          <div className="bars"></div>

        </div>
        </div>
        {/* BTN PARTY */}
        <span className="button-preferences">
          <span className="btn">Let's find Friends  !</span>
          <h2 className="h2-friends">Envie de compagnie ?</h2>
        </span>
    </div>
    );
};

export default MakeFriends;