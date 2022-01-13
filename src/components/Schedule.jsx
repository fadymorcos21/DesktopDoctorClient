import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from './Header'
import { ApptContext } from "./ApptContext";
import Axios from 'axios'
import Dropdown from 'react-bootstrap-dropdown';


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
    const currentDate = new Date();

    function daysInThisMonth() {
        var now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    }
    function daysInThisNextMonth() {
        var now = new Date();
        var next = new Date(now.getFullYear(), now.getMonth + 1);
        return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    }
    const numOfDays = daysInThisMonth();
    const numOfDaysNextMonth = daysInThisNextMonth();


    let tmp = [];

    const dummy = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    const firstWeekDay = dummy.getDay()
    for (var i = 1; i <= numOfDays; i++) {
        if ((i + firstWeekDay) % 7 == 6 || (i + firstWeekDay) % 7 == 0) {
            tmp.push([new Date(currentDate.getFullYear(), currentDate.getMonth(), i)])
            console.log(i)
        }
    }


    for (var i = 0; i < 19; i++) {
        console.log(tmp[i])

    }
    // const year = currentDate.getFullYear();
    // const thedate = currentDate.getDate();
    // const day = currentDate.getDay();
    // const hour = currentDate.getHours();
    // const minute = currentDate.getMinutes();
    // const utcday = currentDate.getUTCDay();


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








    // Book the 11th year {year} thedate {thedate} day {day} hour {hour} minute {minute} utcday {utcday} mon {currentDate.getMonth()} OK

    return (
        <>
            <Header />
            <section className="white-section" id="features">
                <div className="container-fluid padthai" >
                    <hr></hr>
                    <h2>Schedule a drop-off time</h2>
                    <div className="row">
                        <div className="col-lg-12 lef"><h4>Available dates:</h4></div>
                        {/* <Dropdown>
                            <Dropdown.Toggle variant="success">
                                Open Menu
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    Apple
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Google
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Samsung
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off" >
                            hi
                        </button>
                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off">
                            hi
                        </button>
                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off">
                            hi
                        </button>
                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off">
                            hi
                        </button>
                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off">
                            hi
                        </button>
                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off">
                            hi
                        </button>
                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off">
                            hi
                        </button>
                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off">
                            hi
                        </button>
                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off">
                            hi
                        </button>
                        <button type="button" class="btn1 btn-primary col-lg-1" data-toggle="button" aria-pressed="false" autocomplete="off">
                            hi
                        </button>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Schedule;