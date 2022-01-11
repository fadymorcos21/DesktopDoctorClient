import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from "./Header";
import Dropdown from 'react-bootstrap/Dropdown';
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
            
            <div style={{
              display: 'block',
              width: 100,
              marginBottom: 30
            }}>
              <Dropdown>
                <Dropdown.Toggle >
                  Open Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#">
                    <Link to='/repairtype'><h6 onClick={() => setRepairDetails({ ...repairDetails, deviceModel : "Apple"})}>Apple</h6></Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/repairtype'><h6 onClick={() => setRepairDetails({ ...repairDetails, deviceModel : "Google"})}>Google</h6></Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link to='/repairtype'><h6 onClick={() => setRepairDetails({ ...repairDetails, deviceModel : "Samsung"})}>Samsung</h6></Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col-lg-12 lef"><h4>Model?</h4></div>
            <div style={{
              display: 'block',
              width: 100,
              marginBottom: 30
            }}>
              <Dropdown>
                <Dropdown.Toggle >
                  Open Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <Link to='/service'>Apple</Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    Google
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    Samsung
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </section>

    </>


  );




}

export default Model;