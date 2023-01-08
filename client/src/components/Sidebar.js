import React from "react";
import './Sidebar.css';

import {Navlink} from "react-router-dom";


function Sidebar()
{
  return(
    <div >
    <div class="wrapper">
       
       
        <div class="sidebar">
        <div class="toplogo">
          <h2 class="dx">  D-X</h2>
          <h2 class="generator">Generator</h2>
        </div>
            <div class="profile">
            <img src="/data/avator.jpg" alt="Logo" />;
            <h3>sohaib shahid</h3>
            <p>Neurologist</p>
            </div>
            <hr></hr>
            <ul>
                <li>
                    <a href="/DoctorProfile" class="active">
                        <span class="profileicon"><img  src="/data/avator.jpg"/></span>
                        <span class="item">Profile</span>
                    </a>
                </li>
                <li>
                    <a href="/GenerateReport">
                        <span class="icon"><i class="fas fa-desktop"></i></span>
                        <span class="item">Generate Report</span>
                    </a>
                </li>
                <li>
                    <a href="/Appointments">
                        <span class="icon"><i class="fas fa-user-friends"></i></span>
                        <span class="item">View Appointments</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                        <span class="item">Find Patient</span>
                    </a>
                </li>
               
     </ul>
     <button type="button">LOGOUT</button>
       </div>

      
    </div>
   
    
    
    </div>
  );


}
export default Sidebar;