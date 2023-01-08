import React from "react";
import './login.css';



function Login()
{
  return(
    <div class='login-top'>
    <div class="Login-navbar">
    <ul>
       <li><a href="/Homepage">BACK</a></li>
       <li><a href="/Homepage">HELP</a></li>
       </ul>
       </div>

<div class="login-wrapper">
    <form action="" class="login-form">
      <img src="/data/avatar_patient.jpg" alt=""></img>
      <h2>Login</h2>
      <div class="input-group">
      <label for="loginUser">User Name</label>
        <input type="text" name="loginUser" id="loginUser" required ></input>
       
      </div>
      <div class="input-group">
      <label for="loginPassword">Password</label>
        <input type="password" name="loginPassword" id="loginPassword" required></input>
        
      </div>
      <input type="submit" value="Login" class="submit-btn"></input>
      <a href="#forgot-pw" class="forgot-pw">Forgot Password?</a>
    </form>

    <div id="forgot-pw">
      <form action="" class="login-form">
        <a href="#" class="close">&times;</a>
        <h2>Reset Password</h2>
        <div class="input-group">
        <label for="email">Email</label>
          <input type="email" name="email" id="email" required></input>
         
        </div>
        <input type="submit" value="Submit" class="submit-btn"></input>
      </form>
    </div>
  </div>
  

</div>

  );
}
export default Login;
   

