import React from "react";
import './appointment.css';

function Appointments()
{
  return(
    <div  style={{ backgroundImage: "url(/data/backgroundtest.jpg)" }}>
  
   <div class="patient-profile-overview">
       <h4>overview</h4>
       <h1>Appointments</h1>
  
   </div>
   <div class="Appointments-navbar">
                   <ul>
                      <li><a href="/DoctorProfile">BACK</a></li>
                      
                      </ul>
      </div>
  
   <div class="Appointments-wrapper">
   
       <header>  <ul>
                     <li class="Pa">Patient</li>
                     <li class="Ap">Appointment</li>
                     <li class="St">Status</li>
                     <li class="Ph">Phone</li>
                     <li class="Ac">Action</li>
                      
                      </ul></header>
        <hr></hr>
  <div class="Appointments-wrapper-left">
  <ul class="Patient-appointment-detail">
  
      <li class="im">
       <ul class="internal"><li> <img src="/data/avator.jpg" alt="Logo" /></li>
       <li> <h4>saad</h4>
       <h5>23yr,Male</h5>
       </li>

       </ul>
     
      
     
      </li>
      <li  class="ap">
        <h2>6:00pm</h2>
        <h4>2,apr,2011</h4>
      </li>
      <li  class="st"><h4>Active</h4>
      </li>
      <li  class="ph">
        <h4>
          24667789890
        </h4>
      </li>
      <li  class="ac">
      <div class="context-menu-container" >
  <ul class="ac-dot">
    <li><h3>.</h3></li>
    <li><h3>.</h3></li>
    <li><h3>.</h3></li>
    
  </ul>
</div>
       
      </li>

      </ul>
     
      </div>
     
  
   </div>
     
   
  </div>
  );


}
export default Appointments;