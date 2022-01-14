import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from './Header'
import { ApptContext } from "./ApptContext";

function Device() {
    const [user, setUser] = useState({})
    const [loggedin, setloggedin] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth)
      };

    const {repairDetails, setRepairDetails} = useContext(ApptContext);


    return (
        <>
        <Header/>
            <section className="white-section" id="features">
                <div className="container-fluid padthai" >
                <hr></hr>
                <h2>Which device do you need to fix?</h2>
                    <div className="row">
                      

                    <Link className="col-lg-6 boxSize" to='/devicemodel' onClick={() => setRepairDetails({ ...repairDetails, deviceName : "Computer"})}><button className="col-lg-12 special"  >Computer</button></Link>
                    <Link className="col-lg-6 boxSize" to='/devicemodel' onClick={() => setRepairDetails({ ...repairDetails, deviceName : "Tablet"})}><button className="col-lg-12 special"  >Tablet</button></Link>
                    <Link className="col-lg-6 boxSize" to='/devicemodel' onClick={() => setRepairDetails({ ...repairDetails, deviceName : "Phone"})}><button className="col-lg-12 special"  >Phone</button></Link>
                    <Link className="col-lg-6 boxSize" to='/devicemodel' onClick={() => setRepairDetails({ ...repairDetails, deviceName : "Console"})}><button className="col-lg-12 special"  >Game console</button></Link>

                    </div>
                </div>
            </section>
        </>     
    );
}

export default Device;