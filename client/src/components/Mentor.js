import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadForm from "./UploadForm";
import UploadsList from "./UploadsList";
import Navbar from './Navbar';
import { useTheme } from '../DarkThemeprovider';
// import d from '../images/d.png' 
import d from './images/d.png'
const BACKEND_URI = "http://localhost:8080";


const Mentor = () => {
  const { theme, toggleTheme } = useTheme();
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };

 
  

  return (
    <div className={`app ${theme}`}>
       <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      
      <div className={`row ${theme}`}>    
      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <img className="img-fluid w-100" alt="Register" src={d} />
            </div>
            <div className="col-md-6 col-xl-6 text-center text-md-start">
              <h1 className="ms-md-5">Mentor Dashboard</h1>
              <UploadForm getAllMedias={getAllMedias} />
            </div>
          </div>
        </div>
      </section>

        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "1200px",
              marginLeft :'-200px',
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsList medias={medias} />
            </div>
          </div>
        </div>
       
      </div>
    
    </div>
  );
};

export default Mentor;
