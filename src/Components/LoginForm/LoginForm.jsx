import React from "react";
import './LoginForm.css'; 

const LoginForm = () =>{
 return(
    <div class="wrapper">
    <form action="">
       <h1>Login</h1>
       <div class="input_box">
          <label>UserName</label>
          <input type="text" placeholder="Enter your Username" required/>            
       </div>
       <div class="input_box">
          <label> Password </label>
          <input type="password" placeholder="Enter your Password" required/>
       </div>

       <button type="submit" class="btn">Login</button>
    </form>
  </div>
 );
};

export default LoginForm;