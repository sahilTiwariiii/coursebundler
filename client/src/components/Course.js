import React from 'react';
import start from './assets/img/illustrations/startup.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/Raleway.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Course({ theme, toggleTheme }) {
 
  return (
    <div className={`app ${theme}`}>
      <div className="container">
      <section className="py-5 mt-5">
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div style={{ maxWidth: '350px' }}>
                <h1 className="display-5 fw-bold mb-4">
                  Skyrocket your knowledge with our&nbsp;
                  <span className="underline0">tools</span>.
                </h1>
                <p className={`text-muted${theme}`}>
                  Discover the art of learning by doing with our interactive courses.
                  Gain practical skills and knowledge through hands-on experiences for a transformative educational journey.
                </p>
                <Link className="btn btn-primary btn-lg me-2" role="button" href="/">Student</Link>
                {/* <a className="btn btn-light btn-lg" role="button" href="/Mentor">Mentor</a> */}
                <Link className="btn btn-light btn-lg" role="button" to="/Mentor">Mentor</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img className="rounded img-fluid w-100 fit-cover" style={{ minHeight: '300px' }} src={start} alt="Startup Illustration" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div >
      <div >
        <div className="container" style={{ paddingTop: '0cm' }}>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card  d-flex flex-column">
                <div className="inner">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFvsQSdttwG751glh8gcnoObBccztlcgphQ&usqp=CAU"
                    height="170px"
                    className="card-img-top img-fluid"
                    alt=""
                  />
                </div>
                <br />
                <div className="card-body">
                <h1 className="card-title">Academic Courses</h1>
                  <a className="btn btn-sm btn-primary" href="/C1">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex flex-column">
                <div className="inner">
                  <img
                    src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
                  
                    alt="hospitals"
                    className="card-img-top img-fluid"
                    style={{ maxHeight: '220px', objectFit: 'cover' }}
                  />
                </div>
                <br />
                <div className="card-body">
                <h1 className="card-title">Professional Courses</h1>
               
                  <a className="btn btn-sm btn-primary" href="/C2">
                    View
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card  d-flex flex-column">
                <div className="inner">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvSaj5YEA6xNdmGxgkbMNLMMgOcHDy1Atcw&usqp=CAU"
                    className="card-img-top img-fluid"
                    // height="100px"
                    alt="hospitals"
                    style={{ maxHeight: '220px', objectFit: 'cover' }}
                  />
                </div>
                <br />
                <div className="card-body">
                <h1 className="card-title">Creative Arts</h1>
                  <a className="btn btn-sm btn-primary" href="/RegisterAsHospital" >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

Course.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Course;
