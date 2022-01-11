import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from './Header'
import { ApptContext } from "./ApptContext";

function Service() {
    const [user, setUser] = useState({})
    const [loggedin, setloggedin] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth)
      };

    const {repairDetails, setRepairDetails} = useContext(ApptContext)

    return (
        <>
        <Header/>
            <section className="white-section" id="features">
                <div className="container-fluid padthai" >
                <hr></hr>
                <h2>How do you want to get your device repaired?</h2>
                    <div className="row">
                        <div className="col-lg-4 boxSize"><Link to='/schedule'><h3 onClick={() => setRepairDetails({ ...repairDetails, service : "Screen"})} >Broken Screen</h3></Link></div>
                        <div className="col-lg-4 boxSize"><Link to='/schedule'><h3 onClick={() => setRepairDetails({ ...repairDetails, service : "Water"})} >Water Damage</h3></Link></div>
                        <div className="col-lg-4 boxSize"><Link to='/schedule'><h3 onClick={() => setRepairDetails({ ...repairDetails, service : "Battery"})} >Battery</h3></Link></div>
                    </div>
                </div>
            </section>
            
            </>     
    );
}

export default Service;