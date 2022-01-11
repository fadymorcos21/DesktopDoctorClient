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



function App(){
  const [repairDetails, setRepairDetails] = useState({deviceName: "", deviceModel : "", repairType : "", service  : "", date : "something"});


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
         </Routes>
         </ApptContext.Provider>

      </Router>
    );
}


export default App;
