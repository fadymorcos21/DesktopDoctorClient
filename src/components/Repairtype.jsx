import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from './Header'
import { ApptContext } from "./ApptContext";

function Repairtype() {
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
                    <Link className="col-lg-6 boxSize" to='/service'><button className="col-lg-12 special" onClick={() => setRepairDetails({ ...repairDetails, repairType : "Drop-off"})} >Drop-off</button></Link>
                    <Link className="col-lg-6 boxSize" to='/service'><button className="col-lg-12 special" onClick={() => setRepairDetails({ ...repairDetails, repairType : "Drop-off"})} >Mail-in</button></Link>
                    
                    </div>
                </div>
            </section>
            
            </>     
    );
}

export default Repairtype;