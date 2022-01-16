import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ApptContext } from "./ApptContext";


function Tablerows(props) {

    const { repairDetails, setRepairDetails } = useContext(ApptContext);

    return (
        <tr>
            <td>{props.dodo} </td>
            <td>{props.poop}</td>

            <td>{props.day}</td>
            <td>{props.time}</td>

        </tr>
    )
}

export default Tablerows;