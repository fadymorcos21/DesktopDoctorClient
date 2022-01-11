import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Header from './Header'

function Home() {

    const [user, setUser] = useState({})
    const [loggedin, setloggedin] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth)
      };


    
    return (
        <React.Fragment>
        <Header / >
            <hr />
            <div class="section" >
                <div class="intro">


                    <h1 class="intro-header">Shedule a repair today</h1>
                    <h6>Now offering drop-off, mail-in and in-home repairs</h6>

                    <Link to='/deviceselection'><button type="button" class="btn btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off">
                        Get started
                    </button></Link>

                    <div class="container-fluid">

                        <div class="row">
                            <div class="feature-box col-lg-3 mysize" >
                                <div class="grouped-devices">
                                    <img class="console introimg" src="col11.png" alt="console" width="315" height="252" />
                                </div>
                            </div>
                            <div class="feature-box col-lg-3">
                                <img class="pc introimg" src="col21.png" alt="pc" width="315" height="252" />
                            </div>

                            <div class="feature-box col-lg-3">
                                <img class="phone introimg" src="col31.png" alt="phone" width="292" height="252" />

                            </div>

                            <div class="feature-box col-lg-3">
                                <img class="laptop introimg" src="col41.png" alt="laptop" width="310" height="252" />
                            </div>
                        </div>


                    </div>





                </div>
            </div>
            <div class="section1">
                <h1 class="header">Can't to drop off? Explore solutions</h1>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger btn-section1">In-home repair</button>
                    <button type="button" class="btn btn-success btn-section1">Mail-In repair</button>
                </div>
            </div>
            <section class="section2" id="title">


                <div class="row">

                    <div class="col-lg-6">
                        <h1 class="heading-section2">60-minute phone screen repairs offered for a variety of phone brands.</h1>
                        <button type="button" class="btn btn-outline-dark btn-lg download-button btn2-section2">Book Now</button>
                    </div>

                    <div class="col-lg-6">
                        <img class="title-image" src="iPhone4.png"></img>
                    </div>



                </div>

            </section>
            <section class="section3">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <h2 class="testimonial-text">Exceptionally responsive, polite, and responsible young man. Very professional in understanding your requirement and ensuring the concerns are addressed.
                                Quick turnaround time and stays in touch, if required, with updates to ensure you're up to date with the progress.
                                Trustworthy and 100% good value for the money.</h2>
                            <br /><h4><b>Mustafa Iqbal</b></h4>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div class="carousel-item">
                            <h2 class="testimonial-text">"Mad convenient, water proof and everything. Lmao don’t go to apple they steady robbing ppl."</h2>
                            <br /><h4><b>John Abdel Mesih</b></h4>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div class="carousel-item">
                            <h2 class="testimonial-text">Extremely professional and really friendly staff. He was able to repair my laptop and get it working as if I had just bought it brand new! Highly recommend for anyone looking to repair their computers for a fraction of the price that competitors might give you!</h2>
                            <br /><h4><b>Peter Hanna</b></h4>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <section class="section4">
                <div class="container-fluid">

                    <div class="row">
                        <div class="feature-box col-lg-4">
                            <i class="icon fas fa-check-circle fa-4x"></i>
                            <h3 class="feature-title">Easy to use.</h3>
                            <p>Simply shedule a drop-off time, problem will be diagnosed and addressed same day.</p>
                        </div>

                        <div class="feature-box col-lg-4">
                            <i class="icon fas fa-bullseye fa-4x"></i>
                            <h3 class="feature-title">Accurate</h3>
                            <p>Pinpoint problem in any device</p>
                        </div>

                        <div class="feature-box col-lg-4">
                            <i class="icon fas fa-heart fa-4x"></i>
                            <h3 class="feature-title">Free Diagnosis.</h3>
                            <p>Get free problem assessing and quotation</p>
                        </div>
                    </div>



                </div>

                <footer class="white-section" id="footer">
                    <div class="container-fluid">
                        {/* <i class="social-icon fab fa-facebook-f"></i>
                        <i class="social-icon fab fa-twitter"></i>
                        <i class="social-icon fab fa-instagram"></i>
                        <i class="social-icon fas fa-envelope"></i> */}
                        <p class="copyright">© Copyright 2021 Fady Moros</p>
                    </div>
                </footer>
            </section>
        
        </React.Fragment>

    );
}

export default Home;
