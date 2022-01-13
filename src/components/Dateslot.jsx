import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ApptContext } from "./ApptContext";


function Dateslot(props) {

    const { repairDetails, setRepairDetails } = useContext(ApptContext);

    return (
        <button type="button" class="btn1 btn-primary col-lg-3" data-toggle="button" aria-pressed="false" autocomplete="off" onClick={() => setRepairDetails({ ...repairDetails, date :  props.day + " " +  props.month+"/"+props.daynumber})} >
                            {props.day} {props.month}/{props.daynumber}
                        </button>
    )
}

export default Dateslot;