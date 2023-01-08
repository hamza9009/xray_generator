import React from "react";
import './Findpatient.css';
import './profile.css';
import './Searchbar.css'
import { useNavigate } from 'react-router-dom';



function FindPatient()
{


    const history =  useNavigate ();
  
    const logoutpage = () => {
        history("/Homepage")
    }
    const Findpatientpage = () => {
        history("/PatientProfile")
    }
  return(
    <div  style={{ backgroundImage: "url(/data/backgroundtest.jpg)" }}>

   


    <div class="FindPatient-wrapper">
      
      
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
                  <a href="/DoctorProfile" >
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
                  <a href="/FindPatient" class="active">
                      <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                      <span class="item">Find Patient</span>
                  </a>
              </li>
             
   </ul>
   <button type="button"onClick={logoutpage}>LOGOUT</button>
     </div>

    
  </div>
 






<div class='top-header'>
   <div class="FindPatient-conatiner_search">
   
       <h4>overview</h4>
       <h1>Patient Profiles</h1>

   
           <form  class="searchbar"action="">
               <input type="text"
                   placeholder="Find Patient specifically..."
                   name="search"/>
               <button type="submit"><img src="/data/searchicon.png"></img>
                   
               </button>
           </form>
       </div>
   
  
 <div>
 </div>
 <div>
   <div class="FindPatient-profile-wrapper">
   <div class='FindPatient-profile-wrapper-left'> <img src="/data/avator.jpg" alt="Logo" />;
      <h2>saad shahid</h2>
     
      <button class="nextBtn">
                    <span class="btnText"onClick={Findpatientpage}>View Profile</span>
                    <i class="uil uil-navigator"></i>
                </button></div>
  
      <div class='FindPatient-profile-wrapper-right'> <h4>Patient information</h4>
      <p>bhhjjkkl;lhfrdfhjlkfghghhjjkj<br></br>rdyguhhyfhoko</p>
</div>
     
  
     
     </div>
</div>
</div>
</div>
 );
}
export default FindPatient;