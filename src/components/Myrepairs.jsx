import React, { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from "./Header";
import { ApptContext } from "./ApptContext";
import Axios from 'axios'
import Tablerows from './Tablerows'
import Console from "./Console";


function Myrepairs() {
  const [user, setUser] = useState({})
  const [loggedin, setloggedin] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth)
  };


  const {repairDetails, setRepairDetails} = useContext(ApptContext);

  console.log(repairDetails)


  useEffect(() => {
    Axios.get('https://desktop-doctor.herokuapp.com/api/gett').then((response)=>{
      setYourrepairs(response.data);
      console.log("poop");
      console.log(response.data);

    });
  }, []);


  const [yourrepairs, setYourrepairs] = useState([]) 
  const [reps, setReps] = useState([]) 
  
  const [goat, setGoat] = useState(1) 


  
  useEffect(() => {
    let empty = [];
    for (var i = 0; i < yourrepairs.length; i++){
      console.log(yourrepairs.email)
      console.log(user?.email)

      if (yourrepairs[i].email === user?.email){
        empty.push(yourrepairs[i])
      }
    }
    console.log(empty)
    console.log(empty)
    console.log(empty)
    console.log(empty)

    setReps(empty)
    console.log(yourrepairs)
  }, [yourrepairs]);



  

  function createlist(tm) {
    return (
      <Tablerows
        dodo={tm.device}
        poop={tm.service}
        day={tm.date}
        time={tm.time}

      />
    );
  }

  return (
    <>
      <Header />
      <section className="white-section" id="features">
        <div className="container-fluid padthai" >       
      {user === null ? 
        <h2>Please <Link to='/signin' style={{color: 'black', margin:'0'}}>sign-in</Link> to view your repairs</h2>
        : <div><h2>Your repairs</h2><table><th>Device</th><th>Service</th><th>Day</th><th>Time</th>{reps.map(createlist)}</table></div>
      }

        </div>
      </section>

    </>
  );
}

export default Myrepairs;