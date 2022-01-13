import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from './Header'
import { ApptContext } from "./ApptContext";
import Axios from 'axios'
import Dateslot from './Dateslot'


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
    var oneoftheweekdays;
    for (var i = currentDate.getDate(); i <= numOfDays; i++) {
        if ((i + firstWeekDay) % 7 == 6 || (i + firstWeekDay) % 7 == 0) {
            const aweekday = new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
            tmp.push({theday : (i + firstWeekDay) % 7 == 6 ? "Sat" : "Sun", daynum : i, monthnum : aweekday.getMonth()+1})
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


    function createBooton(tm) {
        return (
          <Dateslot
            day={tm.theday}
            daynumber={tm.daynum}
            month={tm.monthnum}
            
          />
        );
      }

    return (
        <>
            <Header />
            <section className="white-section" id="features">
                <div className="container-fluid padthai" >
                    <hr></hr>
                    <h2>Schedule a drop-off time</h2>
                    <div className="row">
                        <div className="col-lg-12 lef"><h4>Available weekend dates:</h4></div>
                          {tmp.map(createBooton)}
                          <div className="col-lg-12 lef" style={{marginTop: '24px', marginBottom: '16px'}}><h4>Select available time:</h4></div>
                          <a> 9:00</a>
                          <a> 9:30</a>
                          <a> 10:00</a>
                          <a> 10:30</a>
                          <a> 11:00</a>
                          <a> 11:30</a>
                          <a> 12:00</a>
                          <div className="col-lg-12"><btn className="btn btn-primary" >Book Drop-off</btn></div>
                          



                        
                    </div>
                </div>
            </section>

        </>
    );
}

export default Schedule;