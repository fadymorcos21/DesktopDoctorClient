import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from "./Header";
import { ApptContext } from "./ApptContext";

function Info() {
  const [user, setUser] = useState({})
  const [loggedin, setloggedin] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth)
  };

//   function asignInfo(){
//     setRepairDetails({ ...repairDetails, first : first})
//     setRepairDetails({ ...repairDetails, last : last})
//     setRepairDetails({ ...repairDetails, phone : cellNum})
//   }

  const {repairDetails, setRepairDetails} = useContext(ApptContext);

  console.log(repairDetails)

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [cellNum, setCellNum] = useState("");



  return (
    <>
      <Header />
      <section className="white-section" id="features">
        <div className="container-fluid padthai" >
          <hr></hr>
          <h2>Please enter your name and phone number</h2>
          <div className="row">
            <div className="col-lg-12 lef"><h4>First name?</h4></div>
            <div className="col-lg-12 lef"><input style={{
              textAlign: 'left',
              marginLeft: 0,
              borderColor: 'black',
              fontSize: '15px',
              marginBottom: '12px',
              marginTop: '12px',
              width: '100%'

            }}
                type="text"
                placeholder="Enter first name here"
                onChange={(event) => {
                  setFirst(event.target.value)
                }}
              /></div>
            <div className="col-lg-12 lef"><h4>Last name?</h4></div>
            <div className="col-lg-12 lef"><input style={{
              textAlign: 'left',
              marginLeft: 0,
              borderColor: 'black',
              fontSize: '15px',
              marginBottom: '12px',
              marginTop: '12px',
              width: '100%'
            }}
                type="text"
                placeholder="Enter last name here"
                onChange={(event) => {
                  setLast(event.target.value)
                }}
              /></div>
              <div className="col-lg-12 lef"><h4>Last name?</h4></div>
            <div className="col-lg-12 lef"><input style={{
              textAlign: 'left',
              marginLeft: 0,
              borderColor: 'black',
              fontSize: '15px',
              marginBottom: '12px',
              marginTop: '12px',
              width: '100%'

            }}
                type="text"
                placeholder="Enter last name here"
                onChange={(event) => {
                  setCellNum(event.target.value)
                }}
              /></div>
            <div className="col-lg-12"><Link to='/deviceselection'><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
            onClick={() => setRepairDetails({ ...repairDetails, first : first, last : last, phone : cellNum})}>
    

                        Continue
                    </button></Link></div>
                    {/* last : last, phone : cellNum */}
          </div>
        </div>
      </section>

    </>


  );
}

export default Info;