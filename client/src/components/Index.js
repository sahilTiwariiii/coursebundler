import React from 'react' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from './Navbar';
import Footer from './Footer';
import Course from './Course';
import SignUp from "./SignUp";
import Carrier from "./Carrier";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Index() {

    return(
    <div >
      <Navbar></Navbar>
      <Course></Course>
      <Carrier></Carrier>
      <Footer></Footer>

    </div>
    )
}

export default Index