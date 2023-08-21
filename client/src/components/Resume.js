
import React from 'react';
import { useTheme } from '../DarkThemeprovider';
import Navbar from './Navbar';



function Resume() {

  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
    <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
    <div style={{height:'110%'}}>
    <div className={`c1 ${theme}`}>
    <h1 className={`c1h ${theme}`}>Resume</h1><br />
        <a className={`Resume col-sm-6 col-md-4 col-lg-3`} href='/' style={{ height: '500px' }} >  
        <h6 className="Resume-name"> Name : hello</h6>
        </a>

        <a className={`Resume col-sm-6 col-md-4 col-lg-3`} href='/' style={{ height: '500px' }}>
        <h6 className="Resume-name"> Name : hello</h6>
        </a>

        <a className={`Resume col-sm-6 col-md-4 col-lg-3`} href='/' style={{ height: '500px' }}>
        <h6 className="Resume-name"> Name : hello</h6>
        </a>
      </div>
      
      <div className={`c1 ${theme}`}>
        <a className={`Resume col-sm-6 col-md-4 col-lg-3`} href='/' style={{ height: '500px' }} >
        <h6 className="Resume-name"> Name : hello</h6>
        </a>

        <a className={`Resume col-sm-6 col-md-4 col-lg-3`} href='/' style={{ height: '500px' }}>
        <h6 className="Resume-name"> Name : hello</h6>
        </a>
        <a className={`Resume col-sm-6 col-md-4 col-lg-3`} href='/' style={{ height: '500px' }}>
        <h6 className="Resume-name"> Name : hello</h6>
        </a>
       
      </div>
      <div className={`c1 ${theme}`}>
        <a className={`Resume col-sm-6 col-md-4 col-lg-3`} href='/' style={{ height: '500px' }} >
        <h6 className="Resume-name"> Name : hello</h6>
        </a>

        <a className={`Resume col-sm-6 col-md-4 col-lg-3`} href='/' style={{ height: '500px' }}>
        <h6 className="Resume-name"> Name : hello</h6>
        </a>
        <a className={`Resume col-sm-6 col-md-4 col-lg-3`} href='/' style={{ height: '500px' }}>
        <h6 className="Resume-name"> Name : hello</h6>
        </a>
       
      </div>
      </div>
    </div>
  );
}

export default Resume;
