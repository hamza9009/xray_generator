import React from "react";
import './PatientProfile.css'
import { useNavigate } from 'react-router-dom';
function PatientProfile()
{
  
  const history =  useNavigate ();
  
  const logoutpage = () => {
      history("/Homepage")
  }

    return(
  <div  style={{ backgroundImage: "url(/data/backgroundtest.jpg)" }}>

 <div class="patient-profile-overview">
     <h4>overview</h4>
     <h1>Patient Profile</h1>

 </div>
 <div class="patient-profile-navbar">
                 <ul>
                    <li><a href="/DoctorProfile">BACK</a></li>
                    
                    </ul>
    </div>

 <div class="patient-profile-wrapper">
<div class="patient-profile-wrapper-left">
 <img src="/data/avator.jpg" alt="Logo" />;
    <h2>saad shahid</h2>
    <h3>king international hospital</h3>
    </div>
    <div class="patient-profile-wrapper-right">
      <ul>
       <li>
         <h3>FullName</h3>
         <h5>Arbab sohaib shahid</h5>
         <hr></hr>
       </li>
      
      
       <li>
       <h3>Address</h3>
       <h5>swat kpk</h5>
       <hr></hr>
       </li>

       <li>
       <h3>Major Profile</h3>
       <h5>asthma stage2</h5>
       <hr></hr>
       </li>
      
     
       <li>
       <h3> last appointments</h3>
       <h5>23/4/2021</h5>
       <hr></hr>
       </li>
       <li>
       <h3>15/1/2019</h3>
       <h5>Fees</h5>
       <hr></hr>
       </li>
       <li>
       <h3>Contact Info</h3>
       <h5>992344657</h5>
       <h5>sohaib@gmail.com</h5>
       <h5>/facebook/sohaib</h5>
    
       </li>



      </ul>
    </div>

 </div>
   
 
</div>
);
}

export default PatientProfile;