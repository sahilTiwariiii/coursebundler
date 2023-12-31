import React from 'react' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from './Navbar';
import Footer from './Footer';
import register from './assets/img/illustrations/register.svg'
import './Style.css'
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useTheme } from '../DarkThemeprovider';

const SignIn = () => {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };

  const { theme, toggleTheme } = useTheme();
  
  return (
      <div className={`app ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
        
        <section className="py-4 py-md-5 my-5">
          <div className="container py-md-5">
            <div className="row">
              <div className="col-md-6 text-center"><img className="img-fluid w-100" src={register} alt="Register" /></div>
              <div className="col-md-5 col-xl-4 text-center text-md-start">
                <h2 className="display-6 fw-bold mb-5"><span className="underline pb-1"><strong>Login</strong></span></h2>
                <form method="post" data-bs-theme="light">
                  <div className="mb-3"><input className="shadow-sm form-control" type="email" name="email" id="Email" placeholder="Email" /></div>
                  <div className="mb-3"><input className="shadow-sm form-control" type="password" name="password" id="Password" placeholder="Password" /></div>
                  <div className="mb-5"><button className="btn btn-primary shadow" type="submit">Log in</button></div>
                </form>
                <p ><a href="login.html">Forgot your password?<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
                </svg></a>&nbsp;</p>
             
                <p >New to Brainnex? <a href="SignUp">Sign up<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">

                </svg></a>&nbsp;</p>
              </div>
            </div>
          </div>
        </section>
  
        <Footer></Footer>
      </div>
    );
  }
  
  export default SignIn;
  