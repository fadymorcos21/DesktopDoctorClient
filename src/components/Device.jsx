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
                        <div className="col-lg-4 boxSize"><Link to='/devicemodel'><h3 onClick={() => setRepairDetails({ ...repairDetails, deviceName : "PC"})}>PC</h3></Link></div>
                        <div className="col-lg-4 boxSize"><Link to='/devicemodel'><h3 onClick={() => setRepairDetails({ ...repairDetails, deviceName : "Tablet"})}>Tablet</h3></Link></div>
                        <div className="col-lg-4 boxSize"><Link to='/devicemodel'><h3 onClick={() => setRepairDetails({ ...repairDetails, deviceName : "Phone"})}>Phone</h3></Link></div>
                        <div className="col-lg-4 boxSize"><Link to='/devicemodel'><h3 onClick={() => setRepairDetails({ ...repairDetails, deviceName : "Console"})}>Console</h3></Link></div>
                    </div>
                </div>
            </section>
            
            </>
            
           
    );




}


export default Device;