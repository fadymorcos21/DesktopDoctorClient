import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
function Dateslot(props) {

    return (
        <button type="button" class="btn1 btn-primary col-lg-3" data-toggle="button" aria-pressed="false" autocomplete="off">
                            {props.day} {props.month}/{props.daynumber}
                        </button>
    )
}

export default Dateslot;