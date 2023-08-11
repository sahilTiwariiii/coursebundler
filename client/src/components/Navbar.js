import React from 'react';
import a from './images/a.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/Raleway.css'
import { useNavigate } from 'react-router-dom';
import './assets/bootstrap/css/bootstrap.min.css'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  const token=localStorage.getItem("token")
  const Navigate=useNavigate()
  const logoutClicked=()=>{
    localStorage.removeItem("token")
    Navigate('/')
  }
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
                  <li><Link to="/C1" className="dropdown-item">Academic Course</Link></li>
                  <li><Link to="/C2" className="dropdown-item">Professional Course</Link></li>
                  <li><Link to="/C3" className="dropdown-item">Creative Arts</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link to="/Contact" className="nav-link">Contacts</Link></li>
              <li className="nav-item"><Link to="/faq" className="nav-link">FAQ</Link></li>
              {token&&
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><Link to="/" className="nav-link"><i className="far fa-heart"></i> Favourites</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                <li className="nav-item"><Link to="/Profile" className="nav-link"><i className="fas fa-user"></i> Profile</Link></li>
              </ul>}
            </ul>
            {!token&&<Link className="btn btn-primary shadow" role="button" to="/SignUp">Login/Sign up</Link>}
            {token&&<Link className="btn btn-primary shadow" onClick={logoutClicked} role="button">Logout</Link>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;