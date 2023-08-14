import React from 'react';
import './Style.css'; // Import the CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const C2 = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{height:'1200px'}}>
      <div className='c1'>
        <h1 className='c1h'>Professional Courses</h1><br />
        <div className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Human Resources Management</bold><div style={{color:'red'}}>(2.8 hours)</div></h5>
          <p>This program provides an in-depth understanding of HR management, covering areas like recruitment,and HR legal compliance.</p>
          <p className='cp'>hard</p>
          <p className='cp'>$30.8</p>
          <div className='ratings'>
            <span className='rating'>4.5</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button >Add to Cart</button>
        </div>
        <div className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Digital Marketing</bold><div style={{color:'red'}}>(5 hours)</div></h5>
          <p>This course equips learners with skills in online marketing strategies, including search engine optimization (SEO)</p>
          <p className='cp'>easy</p>
          <p className='cp'>$18</p>
          <div className='ratings'>
            <span className='rating'>3.2</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </div>
        <div className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Certified Public Accountant </bold><div style={{color:'red'}}>(4 hours)</div></h5>
          <p>Designed for aspiring accountants, this course covers topics necessary for the CPA exam.</p>
          <p className='cp'>intermediate</p>
          <p className='cp'>$10</p>
          <div className='ratings'>
            <span className='rating'>3.0</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className='c1'>
        <div className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold>Real Estate Agent Licensing </bold><div style={{color:'red'}}>(2.7 hours)</div></h5>
          <p>For aspiring real estate professionals, this course covers legal aspects, negotiations, and regulations related to real estate transactions. </p>
          <p className='cp'>easy</p>
          <p className='cp'>$18</p>
          <div className='ratings'>
            <span className='rating'>3.8</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </div>

        <div className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Graphic Design and Multimedia </bold><div style={{color:'red'}}>(9 hours)</div></h5>
          <p> Ideal for creative individuals, this course covers graphic design principles, typography, layout design, image editing, and multimedia creation.</p>
          <p className='cp'>hard</p>
          <p className='cp'>$38</p>
          <div className='ratings'>
            <span className='rating'>3.9</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </div>
        <div className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Certified Financial Planner </bold><div style={{color:'red'}}>(6 hours)</div></h5>
          <p>This course is designed for individuals interested in financial planning.</p>
          <p className='cp'>intermediate</p>
          <p className='cp'>$18</p>
          <div className='ratings'>
            <span className='rating'>2.9</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </div>
       
      </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default C2;
