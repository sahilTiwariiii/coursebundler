// import React from 'react' 
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import Navbar from './Navbar';
// import Footer from './Footer';
// import Course from './Course';
// import a from './images/a.png';
// import register from './assets/img/illustrations/register.svg'
// import './Style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import axios from "axios";
// import  { useEffect } from "react";
// import { useState,  useNavigate } from 'react';



// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const Navigate=useNavigate()

//   const emailChange = (e) => {
//     // console.log(e.target.value)
//     setEmail(e.target.value);
//   };
//   const passwordChange = (e) => {
//     // console.log(e.target.value)
//     setPassword(e.target.value);
//   };
//   const Submitting=async(e)=>{
//     e.preventDefault();
//     const response=await axios.post("http://localhost:8080/bn/auth/login",{email:email,password:password})
//     console.log(response)
//     if(response.status===200){
//       localStorage.setItem("token",response.data.token)
//       Navigate('/')
//     }

//   }
  

//     return (
//       <div>
//         <Navbar></Navbar>
  
//         <section className="py-4 py-md-5 my-5">
//           <div className="container py-md-5">
//             <div className="row">
//               <div className="col-md-6 text-center"><img className="img-fluid w-100" src={register} alt="Register" /></div>
//               <div className="col-md-5 col-xl-4 text-center text-md-start">
//                 <h2 className="display-6 fw-bold mb-5"><span className="underline pb-1"><strong>Login</strong></span></h2>
//                 <form method="post" data-bs-theme="light">
//                   <div className="mb-3"><input className="shadow-sm form-control" type="email" name="email" placeholder="Email" /></div>
//                   <div className="mb-3"><input className="shadow-sm form-control" type="password" name="password" placeholder="Password" /></div>
//                   <div className="mb-5"><button className="btn btn-primary shadow" type="submit">Log in</button></div>
//                 </form>
//                 <p className="text-muted"><a href="ForgetPassword">Forgot your password?<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
//                   {/* SVG path */}
//                 </svg></a>&nbsp;</p>

//                 <p className="text-muted">New to Brainnex? <a href="SignUp">Sign up<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
//                   {/* SVG path */}
//                 </svg></a>&nbsp;</p>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         <Footer></Footer>
//       </div>
//     );
//   }
  
//   export default SignIn;
import React from 'react' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Course from './Course';
import a from './images/a.png';
import register from './assets/img/illustrations/register.svg'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from "axios";
import  { useEffect } from "react";
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

  
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate=useNavigate()

  const emailChange = (e) => {
    // console.log(e.target.value)
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    // console.log(e.target.value)
    setPassword(e.target.value);
  };
  const Submitting=async(e)=>{
    e.preventDefault();
    const response=await axios.post("http://localhost:8080/bn/auth/login",{email:email,password:password})
    console.log(response)
    if(response.status===200){
      localStorage.setItem("token",response.data.token)
      Navigate('/')
    }

  }


  
    return (
      <div>
        <Navbar></Navbar>
  
        <section className="py-4 py-md-5 my-5">
          <div className="container py-md-5">
            <div className="row">
              <div className="col-md-6 text-center"><img className="img-fluid w-100" src={register} alt="Register" /></div>
              <div className="col-md-5 col-xl-4 text-center text-md-start">
                <h2 className="display-6 fw-bold mb-5"><span className="underline pb-1"><strong>Login</strong></span></h2>
                <form onSubmit={Submitting} data-bs-theme="light">
                  <div className="mb-3"><input className="shadow-sm form-control" value={email} onChange={emailChange} type="email" name="email" placeholder="Email" /></div>
                  <div className="mb-3"><input className="shadow-sm form-control"  value={password} onChange={passwordChange} type="password" name="password" placeholder="Password" /></div>
                  <div className="mb-5"><button className="btn btn-primary shadow" type="submit">Log in</button></div>
                </form>
                <p className="text-muted"><Link to="/forgetpassword">Forgot your password?<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
                  {/* SVG path */}
                </svg></Link>&nbsp;</p>

                <p className="text-muted">New to Brainnex? <a href="SignUp">Sign up<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
                  {/* SVG path */}
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