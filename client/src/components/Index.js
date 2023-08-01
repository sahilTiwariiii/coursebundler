import React from 'react' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from './Navbar';
import Footer from './Footer';
import Course from './Course';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Index() {

    return(
    <div >
      <Navbar></Navbar>
      <Course></Course>
      <Footer></Footer>

    </div>
    )
}

export default Index