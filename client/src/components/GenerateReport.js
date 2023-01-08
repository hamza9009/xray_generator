import React from "react";
import './Generatereport.css';
import './profile.css';
import './Searchbar.css'
import { useNavigate } from 'react-router-dom';



function GenerateReport()
{

  
  const history =  useNavigate ();
  
  const logoutpage = () => {
      history("/Homepage")
  }
  return(
   


    
    <div  style={{
       backgroundImage: "url(/data/backgroundtest.jpg)"
    }}>
               
               <div class="navbar">
                 <ul>
                    <li><a href="/Homepage">BACK</a></li>
                    <li><a href="/Homepage">HELP</a></li>
                    </ul>
                    </div>

                     
                    
                     
                     <div class="upload-btn-wrapper">
                     <p class="p1">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p><p class="p1"> Reference site about Lorem Ipsum, giving informatio andom Lipsum generator.</p><p class="p3"> Reference siim Lipsum generator.</p>
                               <button class="btn" upload><span></span>Upload an Xray</button>
              
                                  </div>
                


     <div class="wrapper_generat">
       
       
       <div class="sidebar_generat">
       <div class="toplogo">
         <h2 class="dx">  D-X</h2>
         <h2 class="generator">Generator</h2>
       </div>
           
           <hr></hr>
           <ul>
             
               <li>
                   <a href="/GenerateReport">
                       <span class="icon"><i class="fas fa-desktop"></i></span>
                       <span class="item">Edit Report</span>
                   </a>
               </li>
               <li>
                   <a href="/Appointments" download>
                       <span class="icon"><i class="fas fa-user-friends"></i></span>
                       <span class="item">Download Report</span>
                   </a>
               </li>
               <li>
                   <a href="#">
                       <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                       <span class="item">Inbox</span>
                   </a>
               </li>
              
    </ul>
    <button type="button"onClick={logoutpage}>LOGOUT</button>
      </div>

     
   </div>
  







    
    
    <div class="generate-overview">
        <h4>overview</h4>
        <h1>Generate Report</h1>

    </div>
  
  <div>
    
        
 
</div>
<div class="empty">






</div>
</div>
  );
}
export default GenerateReport;