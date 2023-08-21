import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from './images/a.png';
import register from './assets/img/illustrations/register.svg'
import './Style.css'

const Tutor = () => {
    return(
        <section>
            <div className="container py-4 py-xl-5">
                <div className="row gy-4 gy-md-0">
                    <div className="col-md-6">
                        <div>
                            <img className="rounded img-fluid w-100 fit-cover" style={{ minHeight: '300px' }} src="https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Startup Illustration" />
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                        <div style={{ maxWidth: '350px' }}>
                            <h1 className="display-5 fw-bold mb-4">
                                Come teach with&nbsp;
                                <span className="underline0">us</span>
                            </h1>
                            <p className="text-muted my-4">Become an instructor and change lives</p>
                            <a className="btn btn-primary btn-lg me-2" role="button" href="/">Apply Now</a>
                            {/* <a className="btn btn-light btn-lg" role="button" href="/">Mentor</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tutor;
