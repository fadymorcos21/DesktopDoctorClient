import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from "./Header";
import { ApptContext } from "./ApptContext";

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


  return (
    <>
      <Header />
      <section className="white-section" id="features">
        <div className="container-fluid padthai" >
          <hr></hr>
          <h2>Which brand and model is your device?</h2>
          <div className="row">
            <div className="col-lg-12 lef"><h4>Brand?</h4></div>

            {/* <Link to='/repairtype'><h6 onClick={() => setRepairDetails({ ...repairDetails, deviceModel : "Apple"})}>Apple</h6></Link> */}

            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {repairDetails.deviceModel}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" onClick={() => setRepairDetails({ ...repairDetails, deviceModel: "Apple" })}>Apple</a>
                <a class="dropdown-item" href="#" onClick={() => setRepairDetails({ ...repairDetails, deviceModel: "Samsung" })}>Samsung</a>
                <a class="dropdown-item" href="#" onClick={() => setRepairDetails({ ...repairDetails, deviceModel: "Google" })}>Google</a>
              </div>
            </div>

            <div className="col-lg-12">
                    <Link to='/repairtype' ><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                >Next</button></Link></div>

        </div>
      </div>
    </section>

    </>
  );
}

export default Model;