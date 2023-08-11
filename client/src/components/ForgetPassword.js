import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar';
import Footer from './Footer';
import desk from './assets/img/illustrations/desk.svg'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Forgetpass = () => {
    return (
        <div>

            <Navbar></Navbar>

            <section className="py-4 py-md-5 mt-5">
                <div className="container py-md-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 text-center"><img className="img-fluid w-100" src={desk} alt="Desk" /></div>
                        <div className="col-md-5 col-xl-4 text-center text-md-start">
                            <h2 className="display-6 fw-bold mb-4">Forgot your <span className="underline">password</span>?</h2>
                            
                            <p className="text-muted">Enter the email associated with your account and we'll send you a reset link.</p>
                            <form method="post" data-bs-theme="light">
                                <div className="mb-3"><input className="shadow form-control" type="email" name="email" placeholder="Email" /></div>
                                <form action="ResetPassword">
                                <div className="mb-5"><button className="btn btn-primary shadow" type="submit">Reset password</button></div>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default Forgetpass;
