import React from "react";
import "./ConnectionPage.css";

function ConnectionPage() {
  return (
    
  <div>
      <h1>Welcome to the Festival App</h1>
  <form className="connectionPage" methode="post">
        <div>
        <label for="userName">User name</label>
        <input type="text" name="userName" id="userName" required/>
        </div>
        <div>
        <label for="pass">Your password :</label>
        <input type="password" name="password" id="password" required/>
      </div>
      <div>

        <button type="submit">Entry</button>
        <button type="submit">New here?</button>
      </div>
      </form>
    
  </div>
  
  );
}

export default ConnectionPage;
