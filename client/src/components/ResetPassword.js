import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar';
import Footer from './Footer';
import desk from './assets/img/illustrations/desk.svg'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Resetpass = () => {
    return (
        <div>

            <Navbar></Navbar>

            <section class="py-4 py-md-5 mt-5">
                <div class="container py-md-5">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6 text-center"><img class="img-fluid w-100" src={desk} alt="Desk" /></div>
                        <div class="col-md-5 col-xl-4 text-center text-md-start">
                            <h2 class="display-6 fw-bold mb-4">Reset <span class="underline">password</span></h2>
                            
                            <p class="text-muted">Create a new, strong password</p>
                            <h5 className="text-muted">New Password</h5>
                            <form method="post" data-bs-theme="light">
                                <div class="mb-3"><input class="shadow form-control" type="password" name="password" placeholder="Password" /></div>
                            </form>
                            <h5 className="text-muted">Confirm</h5>
                            <form method="post" data-bs-theme="light">
                                <div class="mb-3"><input class="shadow form-control" type="password" name="email" placeholder="Confirm Password" /></div>
                                <div class="mb-5"><button class="btn btn-primary shadow" type="submit">Save</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default Resetpass;
