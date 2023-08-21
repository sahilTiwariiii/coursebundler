import React from 'react' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from './Navbar';
import Footer from './Footer';
import Course from './Course';
import Carrier from "./Carrier";
import { useTheme } from '../DarkThemeprovider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
<<<<<<< HEAD
// import  { useState } from 'react';
=======
import Tutor from './Tutor';
>>>>>>> 046c8b149f560bb891afe5992c2762f3b9a4d385

function Index() {
  const { theme, toggleTheme } = useTheme();

    return(
<<<<<<< HEAD
=======
    <div >
      <Navbar></Navbar>
      <Course></Course>
      <Carrier></Carrier>
      <Tutor></Tutor>

      <Footer></Footer>
>>>>>>> 046c8b149f560bb891afe5992c2762f3b9a4d385

      <div >
        <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      <Course theme={theme} toggleTheme={toggleTheme} ></Course >
      <Carrier theme={theme} toggleTheme={toggleTheme}></Carrier>
      </div>
      <Footer ></Footer>
      </div>

    )
}

export default Index