import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar';
import Footer from './Footer';
import {  useParams } from 'react-router-dom';
import axios from "axios";

import desk from './assets/img/illustrations/desk.svg'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Resetpass = () => {
    const  token  = useParams();
    const [password, setPassword] = useState("");
    const [resetToken, setresetToken] = useState('');
    const [isValidToken,setIsValidToken]=useState(false)
   
    
    useEffect(()=>{
        
        const checkToken=async()=>{
            console.log(token.token)
            const resp=await axios.get(`http://localhost:8080/bn/auth/verifytoken/${token.token}`)
            console.log(resp.data)
            setIsValidToken(resp.data.isValid)
        }
        checkToken()
    },[token.token])

    const passwordChange = (e) => {
        // console.log(e.target.value)
        setPassword(e.target.value);
      };
    const resetTokenChange = (e) => {
        // console.log(e.target.value)
        setresetToken(e.target.value);
      };

      const submitting = async (event) => {
        event.preventDefault();
        const resp = await axios.post("http://localhost:8080/bn/auth/resetpassword", {
          password: password,
          token:token.token
        });
        console.log(resp.data);
        if(resp.status===200){
            alert('password updated')
            
        }
        else{
            alert('some error occured')
        }
        
      };

    return (
        <div>
           <Navbar></Navbar>
           
           {isValidToken?(
            <section class="py-4 py-md-5 mt-5">
                <div class="container py-md-5">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6 text-center"><img class="img-fluid w-100" src={desk} alt="Desk" /></div>
                        <div class="col-md-5 col-xl-4 text-center text-md-start">
                            <h2 class="display-6 fw-bold mb-4">Reset <span class="underline">password</span></h2>
                            
                            <p class="text-muted">Create a new, strong password</p>
                            <h5 className="text-muted">New Password</h5>
                            <form onSubmit={submitting}  data-bs-theme="light">
                                <div class="mb-3"><input class="shadow form-control" type="password" value={password} onChange={passwordChange} name="password" placeholder="Password" /></div>
                                <div class="mb-3"><input class="shadow form-control" type="text" value={resetToken} onChange={resetTokenChange} name="resetToken" placeholder="resetToken"   style={{ display: 'none' }} /></div>


                                <div class="mb-5"><button class="btn btn-primary shadow" type="submit">Save</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>):(<h1>token expired</h1>)}
            <Footer></Footer>
        </div>
    );
}

export default Resetpass;
