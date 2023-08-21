import React from 'react';
import { useTheme } from '../DarkThemeprovider';
import Navbar from './Navbar';
// import register from './assets/img/illustrations/register.svg';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Mentor() {
  const { theme, toggleTheme } = useTheme();
  // const [uploadedVideos, setUploadedVideos] = useState([]);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  
  useEffect(() => {
    fetchUploadedVideos();
  }, []);

  const fetchUploadedVideos = async () => {
    try {
      const response = await axios.get('/api/videos'); // Fetch video URLs from backend
      setUploadedVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const uploadVideo = async (videoFile) => {
    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      await axios.post('/api/upload', formData); // Upload video to backend
      fetchUploadedVideos(); // Fetch updated video list
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };
  
  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      
      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <img className="img-fluid w-100" alt="Register" src="https://www.umassmed.edu/globalassets/irazoqui/images/inspiration/mentoring-3-.jpg" />
            </div>
            <div className="col-md-6 col-xl-6 text-center text-md-start">
              <h1 className="ms-md-5">Mentor Dashboard</h1>
              <div className='UploadForm ms-md-5'>
                <h2>Upload Videos</h2>
                <input type="file" onChange={(e) => uploadVideo(e.target.files[0])} />
                <button>Upload Video</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='UploadedVideos' theme={theme}>
        <h2>Uploaded Videos</h2>
<ul>
    {uploadedVideos.map((video, index) => (
      <li key={index}>
        <video controls>
          <source src={URL.createObjectURL(video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </li>
    ))}
  </ul>
      </div>
    </div>
  );
}

export default Mentor;
