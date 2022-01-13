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
            fir: repairDetails.first,
            las: repairDetails.last,
            cel: repairDetails.phone,
            dev: repairDetails.deviceName,
            mod: repairDetails.deviceModel,
            rep: repairDetails.repairType,
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
            
                          <button type="button" class="btn btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off"
                            onClick={submitAppointment}>Confirm</button>
                    

        </>
    );
}

export default Confirm;