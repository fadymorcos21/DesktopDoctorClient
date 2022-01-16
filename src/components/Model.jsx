import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from "./Header";
import { ApptContext } from "./ApptContext";
import PC from './PC'
import Console from "./Console";
import Phone from './Phone'
import Tablet from './Tablet'

function Model() {
  const [user, setUser] = useState({})
  const [loggedin, setloggedin] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth)
  };


  const { repairDetails, setRepairDetails } = useContext(ApptContext);

  console.log(repairDetails)

  function doIT() {

    if (repairDetails.deviceName === "Tablet") {
      return (<Tablet/>)}
      else if (repairDetails.deviceName ===  "Computer"){
        return (<PC/>)
      
    }

  }

 

  return (
    <>
      <Header />
      <section className="white-section" id="features">
        <div className="container-fluid padthai" >
          <hr></hr>
          <h2>Please provide some more info on your {repairDetails.deviceName}</h2>
          <div className="row">
            <div className="col-lg-12 lef"><h4>Which {repairDetails.deviceName} is it?</h4></div>

            {/* <Link to='/repairtype'><h6 onClick={() => setRepairDetails({ ...repairDetails, deviceModel : "Apple"})}>Apple</h6></Link> */}


            {repairDetails.deviceName === "Console" ? <Console/> : null}
            {repairDetails.deviceName === "Computer" ? <PC/> : null}
            {repairDetails.deviceName === "Tablet" ? <PC/> : null}
            {repairDetails.deviceName === "Phone" ? <Phone/> : null}

            


            {/* <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {repairDetails.deviceModel}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" onClick={() => setRepairDetails({ ...repairDetails, deviceModel: "Apple" })}>Apple</a>
                <a class="dropdown-item" href="#" onClick={() => setRepairDetails({ ...repairDetails, deviceModel: "Samsung" })}>Samsung</a>
                <a class="dropdown-item" href="#" onClick={() => setRepairDetails({ ...repairDetails, deviceModel: "Google" })}>Google</a>
              </div>
            </div> */}

            <div className="col-lg-12">
              <Link to='/service' ><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
              >Next</button></Link></div>

          </div>
        </div>
      </section>

    </>
  );
}

export default Model;
