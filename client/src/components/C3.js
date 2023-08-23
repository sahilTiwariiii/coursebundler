import React from 'react';
import './Style.css'; // Import the CSS file
import Navbar from './Navbar';
import { useTheme } from '../DarkThemeprovider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const C3 = () => {
  
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      <div style={{height:'100px'}}>
      <div className={`c1 ${theme}`}>
        <h1 className={`c1h ${theme}`}>Creative Arts </h1><br />
       
        <Link to='/' className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Fashion Design and Merchandising </bold><div style={{color:'red'}}>(4 hours)</div></h5>
          <p>This course explores fashion design, pattern-making, textiles, and garment construction. </p>
          <p className='cp'>intermediate</p>
          <p className='cp'>$8.8</p>
          <div className='ratings'>
            <span className='rating'>4.8</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <FontAwesomeIcon icon={faHeart}  className='heart' size="2x" />
          <button >Add to Cart</button>
       
        </Link>
  
       
        <Link to='/' className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Film Production Program</bold><div style={{color:'red'}}>(3 hours)</div></h5>
          <p>This program immerses students in the world of filmmaking</p>
          <p className='cp'>hard</p>
          <p className='cp'>$40</p>
          <div className='ratings'>
            <span className='rating'>4.2</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <FontAwesomeIcon icon={faHeart}  className='heart' size="2x" />
          <button>Add to Cart</button>
        </Link>

        <Link to='/' className="course">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Performing Arts </bold><div style={{color:'red'}}>(2 hours)</div></h5>
          <p>This program encompasses theater, dance, and acting.</p>
          <p className='cp'>easy</p>
          <p className='cp'>$10</p>
          <div className='ratings'>
            <span className='rating'>3.0</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <FontAwesomeIcon icon={faHeart}  className='heart' size="2x" />
          <button>Add to Cart</button>
        </Link>
      
       
      </div>
      </div>
    </div>
  );
};

export default C3;
