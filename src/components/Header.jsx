import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
function Header() {

    const [user, setUser] = useState({})
    const [loggedin, setloggedin] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth)
    };


    return (
        <section class="header-navbar">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-dark ">
                    <Link to="/"><a class="navbar-brand" href="">Desktop Doctor</a></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item" href="">
                            <Link to="/myrepairs"><a>My Repairs</a></Link>
                            </li>
                            
                            
                            <li class="nav-item" href="">
                                <Link to="/help"><a>Help</a></Link>
                            </li>
                            {user === null
                                ? <li class="nav-item" href="">
                                    <Link to='/signin'>Log in</Link>
                                </li>
                                : <li class="nav-item" href="">
                                    {user?.email}
                                </li>
                            }
                            {user === null ? null : <li class="nav-item" href="">
                                <a onClick={logout}>Sign Out</a>
                            </li>}


                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header;