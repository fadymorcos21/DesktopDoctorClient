import React, { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from './Header'
import { ApptContext } from "./ApptContext";
import Axios from 'axios'
import Dateslot from './Dateslot'
import Timeslot from './Timeslot'


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
      tmp.push({ theday: (i + firstWeekDay) % 7 == 6 ? "Sat" : "Sun", daynum: i, monthnum: aweekday.getMonth() + 1 })
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

  var times = ["9:00", "9:30", "10:00", "10:00", "10:30", "11:00", "11:30", "12:00"];
  function createTimeBooton(atime) {
    return (
      <Timeslot
        time={atime}
      />
    );
  }


  const [dateSelected, setDateSelected] = useState("")
  const[availableTimes, setAvailableTimes]= useState(times);
  const[datesBooked, setDatesBooked]= useState([]);


  useEffect(() => {
    Axios.get('https://desktop-doctor.herokuapp.com/api/get').then((response)=>{
      setDatesBooked(response.data);
      console.log(response.data);

    });
  }, []);


  useEffect(() => {
    let empty = [];
    for (var i = 0; i < datesBooked.length; i++){
      if (datesBooked[i].date === repairDetails.date){
        empty.push(datesBooked[i].time)
      }
    }
    times = times.filter( ( el ) => !empty.includes( el ) );
    setAvailableTimes(times); 
  }, [repairDetails.date]);

  console.log(repairDetails);

  return (
    <>
      <Header />
      <section className="white-section" id="features">
        <div className="container-fluid padthai" >
          <hr></hr>
          <h2>Schedule a drop-off time</h2>
          <div className="row">
            <div className="col-lg-12 lef"><h4>Select from available weekend dates:</h4></div>
            {tmp.map(createBooton)}
            <div className="col-lg-12 lef" style={{ marginTop: '24px', marginBottom: '16px' }}><h4>Select available time:</h4></div>
            {availableTimes.map(createTimeBooton)}

            <div className="col-lg-10" ><Link to="/confirm"><button className="btn btn-primary">Book {repairDetails.date} {repairDetails.time != "" && repairDetails.date != "" ? " at " + repairDetails.time : null}</button></Link></div>





          </div>
        </div>
      </section>

    </>
  );
}

export default Schedule;