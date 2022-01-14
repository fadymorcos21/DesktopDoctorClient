import React, { useState } from "react";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Device from "./Device";
import Service from "./Service";
import Model from "./Model";
import Repairtype from "./Repairtype";
import { ApptContext } from './ApptContext';
import Schedule from "./Schedule";
import Info from "./Info";
import Help from "./Help";
import Myrepairs from "./Myrepairs"
import Confirm from "./Confirm"
import Booked from "./Booked"



function App(){
  const [repairDetails, setRepairDetails] = useState({first: "", last: "", phone: "", deviceName: "", deviceModel : "", repairType : "", service  : "", date : "", time : ""});


  return (
      <Router>
        <ApptContext.Provider value={{repairDetails, setRepairDetails}}>
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/signin" element={<Signin/>} />
           <Route path="/signup" element={<Signup/>} />
            <Route path="/deviceselection" element={<Device/>} />
            <Route path="/devicemodel" element={<Model/>} />
            <Route path="/repairtype" element={<Repairtype/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/schedule" element={<Schedule/>} />
            {/* new */}
            <Route path="/info" element={<Info/>} />
            <Route path="/Help" element={<Help/>} />
            <Route path="/confirm" element={<Confirm/>} />
            <Route path="/booked" element={<Booked/>} />

            {/* <Route path="/booked" element={<Booked/>} />
            possible can replace model
            <Route path="/pc" element={<PC/>} />    
            <Route path="/tablet" element={<Tablet/>} />            
            <Route path="/cell" element={<Cell/>} />            
            <Route path="/console" element={<Console/>} />
            my repairs */}
            <Route path="/myrepairs" element={<Myrepairs/>} />

         </Routes>
         </ApptContext.Provider>

      </Router>
    );
}


export default App;
