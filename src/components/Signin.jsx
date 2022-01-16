import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase-config'
import { ApptContext } from "./ApptContext";


function Signin() {
    
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [user, setUser] = useState({})

    const [errMess, setErrMess] = useState("")

    let navigate = useNavigate();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const login = async () => {
      try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
      navigate('/');
      setRepairDetails({...repairDetails, email : loginEmail})
      } catch (error) {
        console.log(error.message)
        setErrMess("Email or password is incorrect")
      }
    };

    const logout = async () => {
      await signOut(auth)
    };
  

    const {repairDetails, setRepairDetails} = useContext(ApptContext);


    console.log(repairDetails)
    return (
        <React.Fragment>
        <div className="outerContainer">
          <div className="container">
            <h1>Sign-in</h1>
              <input
                type="text"
                placeholder="E-mail address"
                onChange={(event) => {
                  setLoginEmail(event.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setLoginPassword(event.target.value)
                }}
              />

              <h6 style={{color: 'red'}}>{errMess}</h6>
            <button type="submit" onClick={login} > Log in </button>

            <div className="passrecover">
              <p className="passrecover">Need help? <a>Recover your password here.</a></p>
            </div>
            <h5>OR</h5>
            <Link to='/signup'><button type="submit">Sign up</button></Link>

            <button type="submit" onClick={logout}> Sign out</button>
          </div>
          </div>
        </React.Fragment>


    )


}

export default Signin;
