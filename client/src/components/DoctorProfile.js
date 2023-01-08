import React from "react";
import './Doctorprofile.css';
import './profile.css';
import './Searchbar.css'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';



function DoctorProfile()
{
    const history =  useNavigate ();
  
    const logoutpage = () => {
        history("/Homepage")
    }

  return(
   


    
    <div  style={{ backgroundImage: "url(/data/backgroundtest.jpg)" }}>

   


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
                   <a href="/FindPatient">
                       <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                       <span class="item">Find Patient</span>
                   </a>
               </li>
              
    </ul>
    <button type="button"onClick={logoutpage}>LOGOUT</button>
      </div>

     
   </div>
  







    <div class="conatiner_search">
            <form  class="searchbar"action="">
                <input type="text"
                    placeholder=" Search..."
                    name="search"/>
                <button type="submit"><img src="/data/searchicon.png"></img>
                    
                </button>
            </form>
        </div>
    
    <div class="doctor-overview">
        <h4>overview</h4>
        <h1>Profile</h1>

    </div>
  
  <div>
    <div class="profile-wrapper">
    <img src="/data/avator.jpg" alt="Logo" />;
       <h2>saad shahid</h2>
       <h3>Neurologist</h3>
       <hr></hr>
       <h4>specilization</h4>
       <p>bhhjjkkl;lhfrdfhjlkfghghhjjkj<br></br>rdyguhhyfhoko</p>

    </div>
      
    <div class="container">
  
    <header>Account Details</header>
    <hr></hr>

    <form action="#">
        <div class="form first">
            <div class="details personal">

                <div class="fields">
                    <div class="input-field">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your name" required></input>
                    </div>

                    <div class="input-field">
                        <label>Date of Birth</label>
                        <input type="date" placeholder="Enter birth date" required></input>
                    </div>

                    <div class="input-field">
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email" required></input>
                    </div>

                    <div class="input-field">
                        <label>Mobile Number</label>
                        <input type="number" placeholder="Enter mobile number" required></input>
                    </div>

                    <div class="input-field">
                        <label>Gender</label>
                        <select required>
                            <option disabled selected>Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div class="input-field">
                        <label>specilization</label>
                        <input type="text" placeholder="Enter your ccupation" required></input>
                    </div>
                </div>
            </div>

            <div class="details ID">

                <div class="fields">
                    <div class="input-field">
                        <label>Fees</label>
                        <input type="text" placeholder="Enter Fees" required></input>
                    </div>

                    <div class="input-field">
                        <label>Appointment Day</label>
                        <select required>
                            <option disabled selected>Select  Days</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>

                        </select>
                       
                    </div>
                   


                    <div class="input-field">
                        <label>Hospital</label>
                        <input type="text" placeholder="Enter Hospital" required></input>
                    </div>

                    <div class="input-field">
                        <label>Appointment Times</label>
                        <input type="text" placeholder="Enter appointment times" required></input>
                    </div>


                    <div class="input-field">
                        <label>Address</label>
                        <input type="text" placeholder="city province country" required></input>
                    </div>
                    <div class="input-field">
                        <label>Full Address</label>
                        <input type="text" placeholder="Full address" required></input>
                    </div>
                    <div class="input-field">
                        <label>Career Details</label>
                        <input type="text" placeholder="Career details" required></input>
                    </div>
                </div>
                <button type="button" class="Doctorprofile-button" >Update Details</button>
               
            </div> 
        </div>

        
    </form>
</div>
</div>
</div>
  );
}
export default DoctorProfile;