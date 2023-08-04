import React, { useState } from 'react';
import './Style.css'; // Import the CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const C1 = () => {
  // State to manage the cart items and total
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to add a course to the cart
  const addToCart = (course, price) => {
    setCartItems([...cartItems, { course, price }]);
    setTotal(total + price);
  };

 

  return (
    <div>
    <div className='c1'>
        <Navbar></Navbar>
      <h1 className='c1h'>Academic Courses</h1><br/>
      <div className="course">
        <h3>Course 1: Introduction to Web Development</h3>
        <p>Description: A beginner-friendly course to learn the basics of web development.</p>
        <p>Price: $49.99</p>
        <button onClick={() => addToCart('Course 1', 49.99)}>Add to Cart</button>
      </div>

      <div className="course">
        <h3>Course 2: Advanced JavaScript</h3>
        <p>Description: Take your JavaScript skills to the next level with this advanced course.</p>
        <p>Price: $79.99</p>
        <button onClick={() => addToCart('Course 2', 79.99)}>Add to Cart</button>
      </div>

      <div className="course">
        <h3>Course 2: Advanced JavaScript</h3>
        <p>Description: Take your JavaScript skills to the next level with this advanced course.</p>
        <p>Price: $79.99</p>
        <button onClick={() => addToCart('Course 2', 79.99)}>Add to Cart</button>
      </div>

      <div className="course">
        <h3>Course 2: Advanced JavaScript</h3>
        <p>Description: Take your JavaScript skills to the next level with this advanced course.</p>
        <p>Price: $79.99</p>
        <button onClick={() => addToCart('Course 2', 79.99)}>Add to Cart</button>
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default C1;
