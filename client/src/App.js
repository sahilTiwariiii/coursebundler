import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Index from './components/Index';
import FAQ from './components/FAQ';
import {  Provider } from 'react-redux';
import store from './components/store';
function Apps() {
  return (
  
<Provider store={store}>
<Router>
 <Routes>

  <Route path='/' element={<Index/>} exact/>
  <Route path='/faq' element={<FAQ/>} exact/>

</Routes>
</Router>
</Provider>
    );
}

export default Apps;