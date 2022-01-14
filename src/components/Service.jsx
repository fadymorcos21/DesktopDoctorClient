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
                    <Link className="col-lg-4 boxSize" to='/schedule' onClick={() => setRepairDetails({ ...repairDetails, service : "Screen"})}><button className="col-lg-12 special"  >Cracked Screen</button></Link>
                    <Link className="col-lg-4 boxSize" to='/schedule' onClick={() => setRepairDetails({ ...repairDetails, service : "Water"})}><button className="col-lg-12 special"  >Water Damage</button></Link>
                    <Link className="col-lg-4 boxSize" to='/schedule' onClick={() => setRepairDetails({ ...repairDetails, service : "Battery"})}><button className="col-lg-12 special"  >Battery</button></Link>

                    </div>
                </div>
            </section>
            
            </>     
    );
}

export default Service;