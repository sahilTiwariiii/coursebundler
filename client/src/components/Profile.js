import React from "react";
import "./Style.css";
import { useState, useEffect,useRef } from "react";
import jwtDecode from "jwt-decode";
import axios from 'axios'
import Navbar from "./Navbar";
import b from "./images/b.png";
const Profile = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState({ username: "", email: "",twitterUrl:"",linkedinUrl:"" });
  const [isEditing,setIsEditing]=useState(false)
  const [username,setUsername]=useState(userInfo.username)
  const [twitterUrl,setTwitterUrl]=useState()
  const [linkedinUrl,setLinkedUrl]=useState()
  const [dummy,setDummy]=useState(false)

  useEffect(() => {
    if (token) {
      try {
        // Decode the token and set the decoded data in state
        const decoded = jwtDecode(token);
        console.log(decoded);
        setUserInfo(decoded);
        setUsername(decoded.username)
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, [token]);
  const nowWrite=()=>{
    setIsEditing(prev=>!prev)
  }
  useEffect(()=>{
    const fetchUser=async()=>{
      console.log("email",userInfo.email)
      const resp=await axios.get(`http://localhost:8080/bn/user/getuser/${userInfo.email}`)
      console.log("res",resp.data)
      setUserInfo({email:resp.data.email,username:resp.data.username,twitterUrl:resp.data.twitterUrl,linkedinUrl:resp.data.linkedUrl})
    }
    fetchUser()
  },[dummy])
  const submitValues=async()=>{
    console.log(twitterUrl,linkedinUrl)
    const resp=await axios.post('http://localhost:8080/bn/user/updateprofile',{
      username:username,
      twitterUrl:twitterUrl,
      linkedinUrl:linkedinUrl,
      email:userInfo.email
    })
    setDummy(prev=>!prev)
    console.log(resp.data)

  }
  const usernameChange=(e)=>{
    // console.log(e.current.value)
    setUsername(e.target.value)
  }
  const twitterChange=(e)=>{
    
    setTwitterUrl(e.target.value)
  }
  const linkedinChange=(e)=>{
    setLinkedUrl(e.target.value)
  }
  return (
    <div className="body2">
      <Navbar></Navbar>
      <div className="main" style={{ paddingTop: "80px" }}>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-5 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" src={b} alt="Profile" />

                <input type="file"></input>
              </div>
              <button
                className="btn btn-primary profile-button khuban zehra"
                type="button"
              >
                Upload
              </button>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label className="labels">username</label>
                    {isEditing&&<input
                      
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      onChange={usernameChange}
                      value={username}
                    />}
                    {!isEditing&&
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      value={username}
                    
                      readOnly
                    />}
                  </div>
                  
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    
                    <input
                      
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                      readOnly
                      value={userInfo.email}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Twitter account</label>
                    {isEditing&&<input
                      type="text"
                      className="form-control"
                      placeholder="Twitter"
                      value={twitterUrl}
                      onChange={twitterChange}
                      
                    />}
                    {!isEditing&&
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Twitter"
                      value={twitterUrl}
                      readOnly
                      
                    />}
                  </div>
                  <div className="col-md-12">
                    <label className="labels">LinkedIn account</label>
                    {isEditing&&<input
                      type="text"
                      className="form-control"
                      placeholder="LinkedIn"
                      value={linkedinUrl}
                      onChange={linkedinChange}
                     
                      
                    />}
                    {!isEditing&&
                    <input
                      type="text"
                      className="form-control"
                      placeholder="LinkedIn"
                      value={linkedinUrl}
                      readOnly

                      
                    />}
                  </div>
                </div>
                <div className="abcd">
                  <div className="mt-3 text-center">
                    {!isEditing&&
                    <button
                      className="btn btn-primary profile-button khuban"
                      type="button"
                      onClick={nowWrite}
                    >
                      Edit Profile
                    </button>}
                  </div>
                  <div className="mt-3 text-center">
                    {isEditing&&
                    <button
                      className="btn btn-primary profile-button khuban"
                      type="button"
                      onClick={submitValues}
                      
                    >
                      Save
                    </button>}
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
