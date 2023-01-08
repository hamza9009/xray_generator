
import React from "react";
import './contact.css';



function Contact()
{
  return(
    <div>
    <section class="contact">
    <div class="Contact-navbar-links">
               
               <ul>
               <li><a href="/Homepage">Back</a></li>
                   
                   
               </ul>
               </div>
    
            <div class="content">
                <h1>Contact US</h1>
               
                <p>D-X Generator is your team. we are avalible 24/7 to help our clients.<br></br>so feel free to contact us.we will always be there.<br></br>thankyou</p>
            </div>
            <div class="contact-container">
                <div class="contactInfo">
                    <div class="box">
                        <div class="icon" ><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div class="text">
                        <h3>Address</h3>
                        <p>Fast nuces Ak <br></br> road islamabad pakistan</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                        <div class="text">
                        <h3>Phone</h3>
                        <p>123-456-455</p>
                    </div>
                </div>
                    <div class="box">
                        <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                        <div class="text">
                        <h3>Email</h3>
                        <p>temprory@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div class="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div class="inputBox">
                            <input type="text" name="" required="required" placeholder="Full Name"></input>
                            <span>Full Name</span>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="" required="required"placeholder='Email..'></input>
                            <span>Email</span>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="" required="required" placeholder="Type your Message..."></input>
                            <span>Type your Message...</span>
                        </div>
                        <div class="inputBox">
                            <input type="submit" name="" value="Send"></input>
                           
                        </div>
                    </form>
                </div>
            </div>
        </section>
</div>
   
  );
}
export default Contact;