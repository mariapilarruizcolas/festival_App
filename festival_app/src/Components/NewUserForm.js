import React from "react";
import "./NewUserForm.css";

function NewUserForm() {
  return (
    <section className="container-card">
  <div className="cardForm">
      <h1 className="titleForm">Become Festival User</h1>
  <form className="classForm" methode="post">
        <div classname="itemsForm">
        <label  for="userName">User name</label>
        <input className="inputForm" type="text" name="userName" id="userName" required/>
        </div>
        <div className="itemsForm">
        <label for="Firstname" name="firstname" id="firstname">Firstname</label>
        <input className="inputForm"  type="text" name="firstname" id="firstname" required/>
        </div>
        <div className="itemsForm">

        <label for="lastname">Lastname</label>
        <input className="inputForm" type="text" name="lastname" id="lastname" required/>
        </div>
      <div className="itemsForm">
        <label for="email">Your mail </label>
        <input className="inputForm"  type="text" id="email" name="email" required/>
      </div>
      <div className="radioForm">
        
      <input className="inputForm"  type="radio" name="sex" value="woman" id="sex" required/> <label for="sex">Woman</label>
      <input className="inputForm"  type="radio" name="sex" value="man" id="sex" required/> <label for="sex">Man</label>
      </div>
      <div classname="itemsForm">
        <label for="userMusic" id="userMusic" name="userMusic">
          Choise your music
        </label>
        <select className="inputForm" id="userMusic" name="userMusic" required>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="Hard-Rock">Hard-Rock</option>
          <option value="Techno">Techno</option>
          <option value="World Music">World Music</option>
          <option value="Mix">Mix</option>
          <option value="Reggae">Reggae</option>
        </select>
      </div>
      <div classname="itemsForm">
      <label for="country">Your country</label>
        <input className="inputForm"  type="text" id="country" name="country" required/>
      </div>
      <div classname="itemsForm">
        <label for="pass">Your password </label>
        <input className="inputForm"  type="password" name="password" id="password" required/>
      </div>
      <div classname="itemsForm">

        <button className="buttonForm" type="submit">Create User</button>
        <button className="buttonForm" type="submit">New here</button>
      </div>
      </form>
    
  </div>
  </section>
  );
}

export default NewUserForm;
