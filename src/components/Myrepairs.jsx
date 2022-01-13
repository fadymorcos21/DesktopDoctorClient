import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from "./Header";
import { ApptContext } from "./ApptContext";

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

  return (
    <>
      <Header />
      <section className="white-section" id="features">
        <div className="container-fluid padthai" >       
          <h2>page not done yet</h2>
          <h2>page not done yet, do other stuff</h2>


        </div>
      </section>

    </>
  );
}

export default Myrepairs;