import React from 'react';
import a from './images/a.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/Raleway.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top navbar-shrink py-3 navbar-light" id="mainNav">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img style={{ height: '40px', width: '150px' }} alt="" src={a} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="coursesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </Link>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li><Link to="course1.html" className="dropdown-item">Academic Course</Link></li>
                  <li><Link to="course2.html" className="dropdown-item">Professional Course</Link></li>
                  <li><Link to="course3.html" className="dropdown-item">Technology and IT</Link></li>
                  <li><Link to="course4.html" className="dropdown-item">Creative Arts</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link to="contacts.html" className="nav-link">Contacts</Link></li>
              <li className="nav-item"><Link to="/faq" className="nav-link">FAQ</Link></li>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><Link to="/courses.html" className="nav-link"><i className="far fa-heart"></i> Favourites</Link></li>
                <li className="nav-item"><Link to="/courses.html" className="nav-link"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                <li className="nav-item"><Link to="/courses.html" className="nav-link"><i className="fas fa-user"></i> Profile</Link></li>
              </ul>
            </ul>
            <Link className="btn btn-primary shadow" role="button" to="signup.html">Login/Sign up</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;