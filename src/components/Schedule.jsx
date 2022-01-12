import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from './Header'
import { ApptContext } from "./ApptContext";
import Axios from 'axios'

function Schedule() {
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
            fir: repairDetails.first,
            las: repairDetails.last,
            cel: repairDetails.phone,
            dev: repairDetails.deviceName,
            mod: repairDetails.deviceModel,
            rep: repairDetails.repairType,
            ser: repairDetails.service,
            dat: repairDetails.date
        }).then(() => {
            alert("successful insert");
        });
    };


    return (
        <>
            <Header />
            <section className="white-section" id="features">
                <div className="container-fluid padthai" >
                    <hr></hr>
                    <h2>How do you want to get your device repaired?</h2>
                    <div className="row">
                        <button type="button" class="btn btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off"
                            onClick={submitAppointment}>
                            Book the 11th
                        </button>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Schedule;