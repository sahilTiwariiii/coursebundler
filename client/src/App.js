import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Index from './components/Index';
import FAQ from './components/FAQ';
import {  Provider } from 'react-redux';
import store from './components/store';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import C1 from "./components/C1";
import Profile from "./components/Profile";
import Contact from './components/Contact';

function Apps() {
  return (
  
<Provider store={store}>
<Router>
 <Routes>

  <Route path='/' element={<Index/>} exact/>
  <Route path='/faq' element={<FAQ/>} exact/>
  <Route path='/signup' element={<SignUp/>} exact/>
  <Route path='/signIn' element={<SignIn/>} exact/>
  <Route path='/forgetpassword' element={<ForgetPassword/>} exact/>
  <Route path='/resetpassword' element={<ResetPassword/>} exact/>

  <Route path='/Profile' element={<Profile/>} exact/>
  <Route path='/Contact' element={<Contact/>} exact/>
  <Route path='/C1' element={<C1/>} exact/>


</Routes>
</Router>
</Provider>
    );
}

export default Apps;