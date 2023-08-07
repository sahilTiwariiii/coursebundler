import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Index from './components/Index';
import FAQ from './components/FAQ';
import {  Provider } from 'react-redux';
import store from './components/store';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
function Apps() {
  return (
  
<Provider store={store}>
<Router>
 <Routes>

  <Route path='/' element={<Index/>} exact/>
  <Route path='/faq' element={<FAQ/>} exact/>
  <Route path='/signup' element={<SignUp/>} exact/>
  <Route path='/signIn' element={<SignIn/>} exact/>

</Routes>
</Router>
</Provider>
    );
}

export default Apps;