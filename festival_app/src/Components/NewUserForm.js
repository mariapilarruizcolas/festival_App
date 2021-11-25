import React from "react";

function NewUserForm() {
  return (
    
  <div>
      <h1>Become Festival User</h1>
  <form className="classForm" methode="post">
        <div>
        <label for="userName">User name</label>
        <input type="text" name="userName" id="userName" required/>
        </div>
        <div>
        <label for="Firstname" name="firstname" id="firstname">Firstname</label>
        <input type="text" name="firstname" id="firstname" required/>
        </div>
        <div>

        <label for="lastname">Lastname</label>
        <input type="text" name="lastname" id="lastname" required/>
        </div>
      <div>
        <label for="email">Your mail adress</label>
        <input type="text" id="email" name="email" required/>
      </div>
      <div>
        
      <input type="radio" name="sex" value="woman" id="sex" required/> <label for="sex">Woman</label>
      <input type="radio" name="sex" value="man" id="sex" required/> <label for="sex">Man</label>
      </div>
      <div>
        <label for="userMusic" id="userMusic" name="userMusic">
          Choise your favourite music
        </label>
        <select id="userMusic" name="userMusic" required>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="Hard-Rock">Hard-Rock</option>
          <option value="Techno">Techno</option>
          <option value="World Music">World Music</option>
          <option value="Mix">Mix</option>
          <option value="Reggae">Reggae</option>
        </select>
      </div>
      <div>
      <label for="country">Your country</label>
        <input type="text" id="country" name="country" required/>
      </div>
      <div>
        <label for="pass">Your password :</label>
        <input type="password" name="password" id="password" required/>
      </div>
      <div>

        <button type="submit">Create User</button>
      </div>
      </form>
    
  </div>
  
  );
}

export default NewUserForm;
