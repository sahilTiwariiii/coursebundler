import React from "react";
import { Field, reduxForm } from "redux-form";
import Navbar from './Navbar'
import './Style.css'

const Contact = props => {
  const { handleSubmit} = props;
  
  return (
    <div className="contact">
       <Navbar></Navbar>

<div className="cont2" style={{}}>
  
    <form onSubmit={handleSubmit} data-testid="simple-form">
      <div className="redux" >
        <h1 style={{fontSize:'30px',position:'relative',top:'20px',marginLeft:'100px',color:'white'}}>Feel free to write to Us</h1>
        <label style={{fontSize:'20px',marginLeft:'50px',marginTop:'30px',color:'white'}}>Email:</label>
        <div>
          <Field style={{fontSize:'18px',marginLeft:'50px'}}
            name="email"
            component="input"
            type="email"
            placeholder="enter email"
            data-testid="email"
          />
        </div>
      </div>
      <div>
        <label style={{fontSize:'20px',marginLeft:'50px',marginTop:'15px',color:'white'}}>Message:</label>
        <div>
          <textarea rows="4" cols="40" style={{fontSize:'18px',marginLeft:'50px',backgroundColor:'white'}}
            name="message"
            component="input"
            type="text"
            placeholder="enter message"
            data-testid="message"
          ></textarea>
        </div>
      </div>
      <div>
        <button style={{marginTop:'30px',marginLeft:'204px'}}
          data-testid="submitButton"
          type="submit" onClick={()=>alert('message sent!!')}   
        >
          Submit 
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default reduxForm({
  form: "simple"
})(Contact);