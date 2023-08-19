import React from 'react';
import './Style.css'; // Import the CSS file
import Navbar from './Navbar';
import { useTheme } from '../DarkThemeprovider';

const C1 = () => {
  
  const { theme, toggleTheme } = useTheme();
  
  return (
    
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      <div >
      <div className={`c1 ${theme} row justify-content-center`}>
      <h1 className={`c1h ${theme}`}>Academic Courses</h1><br />
       a <a className={`course col-sm-6 col-md-4 col-lg-3`} href="/">
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci img-fluid'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Introduction to Web Development</bold><div style={{color:'red'}}>(2.5 hours)</div></h5>
          <p>A beginner-friendly course to learn the basics of web development.</p>
          <p className='cp'>easy</p>
          <p className='cp'>$49.99</p>
          <div className='ratings'>
            <span className='rating'>4.8</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button >Add to Cart</button>
        </a>
        <a className={`course col-sm-6 col-md-4 col-lg-3`} href='/'>
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci img-fluid'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Data Structures and Algorithms</bold><div style={{color:'red'}}>(5 hours)</div></h5>
          <p>Explores various data structures and algorithms used in efficient coding and problem-solving.</p>
          <p className='cp'>hard</p>
          <p className='cp'>$59</p>
          <div className='ratings'>
            <span className='rating'>4.0</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </a>
        <a className={`course col-sm-6 col-md-4 col-lg-3`} href='/'>
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci img-fluid'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Introduction to Computer Science: </bold> <div style={{color:'red'}}>(3 hours)</div></h5>
          <p>Provides an overview of fundamental concepts in computer science, including programming, algorithms and problem-solving techniques.</p>
          <p className='cp'>intermediate</p>
          <p className='cp'>$10</p>
          <div className='ratings'>
            <span className='rating'>3.0</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </a>
      </div>
      <div className={`c2 ${theme} row justify-content-center`}>
        <a className={`course col-sm-6 col-md-4 col-lg-3`} href='/'>
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci img-fluid'
            alt="hospitals"
          />
          <h5 className='ch5'><bold>Machine Learning: </bold><div style={{color:'red'}}>(8 hours)</div></h5>
          <p>Introduces the concepts of machine learning and artificial intelligence that enable computers to learn from data.</p>
          <p className='cp'>intermediate</p>
          <p className='cp'>$18</p>
          <div className='ratings'>
            <span className='rating'>3.8</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </a>

        <a className={`course col-sm-6 col-md-4 col-lg-3`} href='/'>
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci img-fluid'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Artificial Intelligence</bold><div style={{color:'red'}}>(4 hours)</div></h5>
          <p> Focuses on developing systems that can mimic human intelligence</p>
          <p className='cp'>easy</p>
          <p className='cp'>$38</p>
          <div className='ratings'>
            <span className='rating'>3.9</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </a>
        <a className={`course col-sm-6 col-md-4 col-lg-3`} href='/'>
          <img
            src="https://indiaeducation.net/wp-content/uploads/2023/04/Professional.jpg"
            className='ci img-fluid'
            alt="hospitals"
          />
          <h5 className='ch5'><bold> Database Management</bold><div style={{color:'red'}}>(7 hours)</div></h5>
          <p>Covers database design, implementation, and management using relational database management systems (RDBMS) like SQL.</p>
          <p className='cp'>Hard</p>
          <p className='cp'>$18</p>
          <div className='ratings'>
            <span className='rating'>2.9</span>
            <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button>Add to Cart</button>
        </a>
       
      </div>
      </div>
    </div>
  );
};

export default C1;
