import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function Book() {
    const [user, setUser] = useState({})
    const [loggedin, setloggedin] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth)
      };
    return (
        <>
        <section class="header-navbar">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-dark ">
                    <a class="navbar-brand" href="">Desktop Doctor</a>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item" href="">
                            <a>Repairs</a>
                        </li>
                        <li class="nav-item" href="">
                            <a>All Services</a>
                        </li>
                        <li class="nav-item" href="">
                            <a>Location</a>
                        </li>
                        <li class="nav-item" href="">
                            <a>Help</a>
                        </li>
                        {user === null
                        ? <li class="nav-item" href="">
                            <Link to='/signin'>Log in</Link>
                        </li>
                        : <li class="nav-item" href="">
                            {user?.email}
                        </li>
                        }
                        {user === null ? null : <li class="nav-item"  href="">
                            <a onClick={logout}>Sign Out</a>
                        </li>}
                    </ul>
                </nav>
            </div>
            </section>
            <section className="white-section" id="features">
                <div className="container-fluid padthai" >
                <hr></hr>
                <h2>How do you want to get your device repaired?</h2>
                    <div className="row">
                        <div className="col-lg-4 boxSize"><h3>Drop-off</h3></div>
                        <div className="col-lg-4 boxSize"><h3>In-home</h3></div>
                        <div className="col-lg-4 boxSize"><h3>Mail-in</h3></div>
                    </div>
                </div>
            </section>
            
            </>     
    );
}

export default Book;