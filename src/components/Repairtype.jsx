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
                        <div className="col-lg-4 boxSize"><Link to='/service'><h3 onClick={() => setRepairDetails({ ...repairDetails, repairType : "Drop-off"})} >Drop-off</h3></Link></div>
                        <div className="col-lg-4 boxSize"><Link to='/service'><h3 onClick={() => setRepairDetails({ ...repairDetails, repairType : "In-home"})} >In-home</h3></Link></div>
                        <div className="col-lg-4 boxSize"><Link to='/service'><h3 onClick={() => setRepairDetails({ ...repairDetails, repairType : "Mail-in"})} >Mail-in</h3></Link></div>
                    </div>
                </div>
            </section>
            
            </>     
    );
}

export default Repairtype;