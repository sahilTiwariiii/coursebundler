import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Index from './components/Index';
import FAQ from './components/FAQ';
import {  Provider } from 'react-redux';
import store from './components/store';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import C1 from "./components/C1";
import C2 from "./components/C2";
import C3 from "./components/C3";
import Profile from "./components/Profile";
import Contact from './components/Contact';
import Mentor from "./components/Mentor";
import Resume from "./components/Resume";
import Coursedata from "./components/Coursedata";

function Apps() {
  return (
  
<Provider store={store}>
<Router>
 <Routes>

  <Route path='/' element={<Index/>} exact/>
  <Route path='/faq' element={<FAQ/>} exact/>
  <Route path='/signup' element={<SignUp/>} exact/>
  <Route path='/signIn' element={<SignIn/>} exact/>

  <Route path='/Profile' element={<Profile/>} exact/>
  <Route path='/Contact' element={<Contact/>} exact/>
  <Route path='/C1' element={<C1/>} exact/>
  <Route path='/C2' element={<C2/>} exact/>
  <Route path='/C3' element={<C3/>} exact/>
  <Route path='/Mentor' element={<Mentor/>} exact/>
  <Route path='/Resume' element={<Resume/>} exact/>
  <Route path='/Resume' element={<Coursedata/>} exact/>

</Routes>
</Router>
</Provider>
    );
}

export default Apps;