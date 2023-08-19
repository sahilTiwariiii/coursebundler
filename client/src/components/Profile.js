import React from 'react';
import './Style.css'
import Navbar from './Navbar';
import b from './images/b.png';
import { useState,useEffect } from 'react';
import { useTheme } from '../DarkThemeprovider';

const Profile = () => {
  // const storedTheme = localStorage.getItem('theme') || 'light';
  // const [theme, setTheme] = useState(storedTheme);

  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  // }, [theme]);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
    <div className='body2'>
      <Navbar theme={theme} toggleTheme={toggleTheme} ></Navbar>
      <div className='main' style={{paddingTop:'80px'}}>
        <div className="container rounded bg-white mt-5 mb-5" >
          <div className={`row ${theme}`}  >
            <div className="col-md-5 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" src={b} alt="Profile" />
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
              {/* <button className='theme-toggle-button' onClick={toggleTheme}>
          Toggle Theme
        </button> */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value="" /></div>
                  <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname" /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value="" /></div>
                  <div className="col-md-12"><label className="labels">Twitter account</label><input type="text" className="form-control" placeholder="Twitter" value="" /></div>
                  <div className="col-md-12"><label className="labels">LinkedIn account</label><input type="text" className="form-control" placeholder="LinkedIn" value="" /></div>
                </div>
                <div className="abcd">
                  <div className="mt-3 text-center">
                    <button className="btn btn-primary profile-button khuban" type="button">Edit Profile</button>
                  </div>
                  <div className="mt-3 text-center">
                    <button className="btn btn-primary profile-button khuban" type="button">History/Favorites</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;