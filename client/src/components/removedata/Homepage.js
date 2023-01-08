import React from "react";
import Login from "./Login";
import Registrationform from "../Registrationform";
import { useNavigate } from 'react-router-dom';
import './homeepage.css';

    

function Homepage()
{
    const history =  useNavigate ();
  
    const LoginPage = () => {
        history("/Login")
    }
    const RegistrationPage = () => {
        history("/Registrationform")
    }
  return(
    
    
  
    <div class="Homepage-banner">
            <div class="Homepage-navbar">
               <div class="Homepage-navbar-logo"> <h2>D-X GENERATOR</h2></div>
               <div class="Homepage-navbar-links">
               
                <ul>
                <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="/Contact">Contact us</a></li>
                    <li><a href="">Events & News</a></li>
                    
                </ul>
                </div>
            </div>
            <div class="Homepage-content">
                <h2>D-X GENERATOR</h2>
                <p>With Model for chest X-ray report generation now  patients and doctors can manage medical history<br></br> and  can extract automatically generated reports from X-rays. </p>
                <div>
                    <button type="button" onClick={LoginPage}><span></span>LOGIN</button>
                    <button type="button"onClick={RegistrationPage}><span></span>REGISTER</button>
                    
                </div>
           


        </div>
        </div>

  );
}
export default Homepage;
