import React, { useContext, useState } from "react";
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


  const {repairDetails, setRepairDetails} = useContext(ApptContext);

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
            
            <Link to='/repairtype'><h6 onClick={() => setRepairDetails({ ...repairDetails, deviceModel : "Apple"})}>Apple</h6></Link>

            <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
            <div className="col-lg-12 lef"><h4>Model?</h4></div>
            
          </div>
        </div>
      </section>

    </>
  );
}

export default Model;