import React from "react";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router,Route, Switch, Routes} from "react-router-dom";
import DoctorProfile from "./components/DoctorProfile";
import Appointments from "./components/Appointments";
import GenerateReport from "./components/GenerateReport";
import FindPatient from "./components/FindPatient";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registrationform from "./components/Registrationform";
import PatientProfile from "./components/PatientProfile";
// import MedicineCard from "./components/MedicineCard";
import MedicineHistoryPage from "./components/MedicineHistoryPage";

function App()
{

    return(
       <>
      
    <Router>
    <Routes>
           
           <Route  path='/MedicineHistoryPage'  element={<MedicineHistoryPage/>}/>
            <Route path='/GenerateReport' element={<GenerateReport/>}/>
            <Route path='/DoctorProfile'  element={<DoctorProfile/>}/>
            <Route path='/Appointments'  element={<Appointments/>}/>
            <Route path='/FindPatient'    element={<FindPatient/>}/>
            <Route  path='/Homepage'  element={<Homepage/>}/>
            <Route  path='/'  element={<Homepage/>}/>
            <Route  path='/Contact'  element={<Contact/>}/>
            <Route  exact path='/Login'  element={<Login/>}/>
            <Route  path='/Registrationform'  element={<Registrationform/>}/>
            <Route  path='/PatientProfile'  element={<PatientProfile/>}/>


            

            
          
            </Routes>
        
        </Router>
     
        
    
        </>
    )
    


}
export default App;