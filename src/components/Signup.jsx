import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase-config"
import { ApptContext } from "./ApptContext";
import Axios from 'axios'


function Signup() {

  const [regEmail, setRegEmail] = useState("")
  const [regPassword, setRegPassword] = useState("")
  const [cell, setCell] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")

  const [errMessage1, setErrMessage1] = useState("")
  const [errMessage2, setErrMessage2] = useState("")


  const [user, setUser] = useState({})
  let navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, regEmail, regPassword)
      console.log(user);
      navigate('/');
      setRepairDetails({ ...repairDetails, email: regEmail, first: firstName, last: lastName, phone: cell })
      Axios.post("https://desktop-doctor.herokuapp.com/api/insert", {
        ema: regEmail,
        fir: firstName,
        las: lastName,
        cel: cell,
        dev: "",
        mod: "",
        ser: "",
        dat: "",
        tim: ""
      }).then(() => {
        alert("successful insert");
      });

    } catch (error) {
      console.log(error.message);
      setErrMessage1("Email must be valid and password must be minimum 6 characters")

    }
  };

  const logout = async () => {
    await signOut(auth)
  };

  const { repairDetails, setRepairDetails } = useContext(ApptContext);


  

  console.log(repairDetails)
  return (
    <React.Fragment>
      <div className="outerContainer">
        <div className="container">
          <h1>Create account</h1>
          <input
            type="text"
            placeholder="E-mail address"
            onChange={(event) => { setRegEmail(event.target.value) }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => { setRegPassword(event.target.value) }}

          />
          <input
            type="text"
            placeholder="First name"
            onChange={(event) => { setFirstName(event.target.value) }}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(event) => { setLastName(event.target.value) }}
          />
          <input
            type="text"
            placeholder="Phone"
            onChange={(event) => { setCell(event.target.value) }}
          />
          <h6 style={{color: 'red'}}>{errMessage1}</h6>
          <h6 style={{color: 'red'}}>{errMessage2}</h6>


          {firstName === "" || lastName === "" || cell.length !== 10
            ? <button type="submit" onClick={() => setErrMessage2("You must enter a name and a 10-digit phone number")} >Sign Up</button>
        
            :           <button type="submit" onClick={register} >Sign Up</button>

            }

          



          <div className="passrecover">
          </div>
          <h5>OR</h5>
          <h6>Already have an account?</h6>


          
          <Link to='/signin'><button type="submit">Sign In</button></Link>
          <button type="submit" onClick={logout}> Sign out</button>
        </div>
      </div>
    </React.Fragment>

  )
}

export default Signup;
