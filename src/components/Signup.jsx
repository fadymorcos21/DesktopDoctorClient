import React, { useState } from "react";
import { Link } from "react-router-dom"
import { onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase-config"


function Signup() {

    const [regEmail, setRegEmail] = useState("")
    const [regPassword, setRegPassword] = useState("")

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const register = async () => {
      try{
      const user = await createUserWithEmailAndPassword(auth, regEmail, regPassword)
      console.log(user);
      } catch (error) {
          console.log(error.message);
      }
    };

    const logout = async () => {
      await signOut(auth)
    };

    return (
        <React.Fragment>
        <div className="outerContainer">
          <div className="container">
            <h1>Create account</h1>
              <input
                type="text"
                placeholder="E-mail address"
                onChange={(event) => {setRegEmail(event.target.value)}}
              />
              <input
                type="text"
                placeholder="Password"
                onChange={(event) => {setRegPassword(event.target.value)}}

              />
              <button type="submit" onClick={register} >Sign Up</button>
            <div className="passrecover">
            </div>
            <h5>OR</h5>
            <h6>Already have an account?</h6>
            <Link to='/signin'><button type="submit">Sign In</button></Link>
            <h4> User Logged In: </h4>
            {user?.email}
            <button type="submit" onClick={logout}> Sign out</button>
          </div>
          </div>
        </React.Fragment>

    )
}

export default Signup;
