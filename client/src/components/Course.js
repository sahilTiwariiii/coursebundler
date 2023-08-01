import React from 'react';
import start from './assets/img/illustrations/startup.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/Raleway.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Course() {
  return (
    <div>
      <section className="py-5 mt-5">
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div style={{ maxWidth: '350px' }}>
                <h1 className="display-5 fw-bold mb-4">
                  Skyrocket your knowledge with our&nbsp;
                  <span className="underline0">tools</span>.
                </h1>
                <p className="text-muted my-4">
                  Discover the art of learning by doing with our interactive courses.
                  Gain practical skills and knowledge through hands-on experiences for a transformative educational journey.
                </p>
                <a className="btn btn-primary btn-lg me-2" role="button" href="/">Student</a>
                <a className="btn btn-light btn-lg" role="button" href="/">Mentor</a>
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
      <div className="xyz">
        <div className="container" style={{ paddingTop: '0cm' }}>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="card">
                <div className="inner">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFvsQSdttwG751glh8gcnoObBccztlcgphQ&usqp=CAU"
                    className="card-img-top"
                    height="170px"
                    alt=""
                  />
                </div>
                <br />
                <h1 className="card-title">Academic Courses</h1>
                <div className="card-body">
                  <a className="btn btn-sm btn-primary" href="/RegisterAsDonor">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="inner">
                  <img
                    src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
                    width="280px"
                    height="170px"
                    alt="hospitals"
                  />
                </div>
                <br />
                <h1 className="card-title">Professional Courses</h1>
                <div className="card-body">
                  <a className="btn btn-sm btn-primary" href="/RegisterAsHospital">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="inner">
                  <img
                    src="https://www.techquintal.com/wp-content/uploads/2021/05/Information-Technology.jpg"
                    className="card-img-top"
                    height="170px"
                    alt="patient"
                  />
                </div>
                <br />
                <h1 className="card-title">Technology & IT</h1>
                <div className="card-body">
                  <a className="btn btn-sm btn-primary" href="/RegisterAsPatient">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="inner">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvSaj5YEA6xNdmGxgkbMNLMMgOcHDy1Atcw&usqp=CAU"
                    className="card-img-top"
                    height="170px"
                    alt="hospitals"
                  />
                </div>
                <br />
                <h1 className="card-title">Creative Arts</h1>
                <div className="card-body">
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
  );
}

export default Course;
