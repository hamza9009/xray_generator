import React from "react";

import './registrationform.css'



function Registrationform()
{
  return(
    <div class='Registration-top'>
    <div class="Registration-navbar">
    <ul>
       <li><a href="/Homepage">BACK</a></li>
       <li><a href="/Homepage">HELP</a></li>
       </ul>
       </div>

    <div class="Registration-wrapper">
    <form action="" class="Registration-form">
        <h2>Registration Form </h2>
        <div class="input-group">
          <input type="text" name="first name" id="first name" required></input>
          <label for="first name">firstname</label>
        </div>
        <div class="input-group">
          <input type="last name" name="loginPassword" id="last name" required></input>
          <label for="last name">lastname</label>
        </div>
       
          <div class="input-group">
            <input type="contact number" name="contact number" id="contact number" required></input>
            <label for="contact number">contact number</label>
        </div>
          <div class="input-group">
            <input type="Email address" name="Email address" id="Email address" required></input>
            <label for="Email address">Email address</label>
        </div>
          <div class="input-group">
            <input type="password" name="loginPassword" id="loginPassword" required></input>
            <label for="loginPassword">Password</label>
        </div>
          <br></br>
       <div class="bottons">
        <input type="submit" value="Register as Patient" class="submit-btn-p"></input>
        <input type="submit" value="Register as Doctor" class="submit-btn-d"></input>
        </div>
        
      </form>
    </div>

</div>
  );}
  export default Registrationform;



   