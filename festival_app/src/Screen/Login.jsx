import React from "react";
import NavBar from "../Components/Header/NavBar";

import NewUserForm from "../Components/NewUserForm";

function Login (){
    return(
        <div className="container-login">
        <NavBar />
        <NewUserForm />
        </div>
    )
}
export default Login;


