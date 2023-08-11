import React from 'react';
import './Style.css'; // Import the CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const C3 = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{height:'1200px'}}>
      <div className='c1'>
        <h1 className='c1h'>Creative Arts </h1><br />
        <div className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Fashion Design and Merchandising </bold></h5>
          <p>This course explores fashion design, pattern-making, textiles, and garment construction. </p>
          <p className='cp'>$8.8</p>
          <div className='ratings'>
            <span className='rating'>4.8</span>
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
          <h5 className='ch5'><bold> Film Production Program</bold></h5>
          <p>This program immerses students in the world of filmmaking</p>
          <p className='cp'>$40</p>
          <div className='ratings'>
            <span className='rating'>4.2</span>
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
          <h5 className='ch5'><bold> Performing Arts </bold></h5>
          <p>This program encompasses theater, dance, and acting.</p>
          <p className='cp'>$10</p>
          <div className='ratings'>
            <span className='rating'>3.0</span>
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

export default C3;
