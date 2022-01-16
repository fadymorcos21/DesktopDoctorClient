import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from './Header'
import { ApptContext } from "./ApptContext";
import Axios from 'axios'
import Dateslot from './Dateslot'
import Timeslot from './Timeslot'


function Confirm() {
    const [user, setUser] = useState({})
    const [loggedin, setloggedin] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth)
    };

    const { repairDetails, setRepairDetails } = useContext(ApptContext);
    const submitAppointment = () => {
        Axios.post("https://desktop-doctor.herokuapp.com/api/insert", {
            ema: repairDetails.email,
            fir: repairDetails.first,
            las: repairDetails.last,
            cel: repairDetails.phone,
            dev: repairDetails.deviceName,
            mod: repairDetails.deviceModel,
            ser: repairDetails.service,
            dat: repairDetails.date,
            tim: repairDetails.time
        }).then(() => {
            alert("successful insert");
        });
    };

    console.log(repairDetails);
    return (
        <>
            <Header />


            <section className="white-section" id="features">
                <div className="container-fluid padthai" >
                    <hr></hr>
                    <h2 style={{marginBottom: '45px'}}>Please confirm appointment</h2>
                    <h3 style={{marginBottom: '25px'}}>Hit confirm to confirm your appointment for your free drop-off diagnoses on {repairDetails.date} at {repairDetails.time}. </h3>
                    <h5 className="lef" style={{marginBottom: '15px'}} >After booking, you may drop off your device to 420 Ellen Davidson Drive, Oakville Ontario. Diagnoses may take up to 2 days. You will be updated with a price quatation within 24-hours</h5>
                    <div className="row">
                        
                    <div className="col-lg-12">
                    <Link to='/booked' ><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                onClick={submitAppointment}>Confirm</button></Link></div>


                    </div>
                </div>
                
            </section>
            


        </>
    );
}

export default Confirm;