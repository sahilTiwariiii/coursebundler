import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar';
import './Style.css'

import PropTypes from 'prop-types';

<Navbar></Navbar>
const Carrier = ( { theme, toggleTheme }) => {
    // const [theme, setTheme] = useState('light');
    return (
        
        <section className={`carr ${theme}`}>
        <div className={`container ${theme}`}>
                <h2 className={`text-center ${theme}`}>Are you confused about course - <b>Let's talk</b></h2>
                <div className={`row ${theme}`}>
                    <div className="col-md-3 text-center lists">
                        <div >
                            <img src="https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meet counsellor" className="img-fluid" />
                        </div>
                        <a href='/' className={`text-center ${theme}`}>Meet counsellor for Academic courses</a>
                    </div >
                    <div className="col-md-3 text-center lists">
                        <div >
                            <img src="https://images.pexels.com/photos/5965839/pexels-photo-5965839.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meet counsellor" className="img-fluid" />
                        </div>
                        <a href='/' className={`text-center ${theme}`}>Meet counsellor for Professional courses</a>
                    </div >
                    <div className="col-md-3 text-center lists">
                        <div>
                            <img src="https://images.pexels.com/photos/5553074/pexels-photo-5553074.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meet counsellor" className="img-fluid" />
                        </div>
                        <a href='/' className={`text-center ${theme}`}>Meet counsellor for Technology and IT</a>
                    </div >
                    <div className="col-md-3 text-center lists">
                        <div >
                            <img src="https://images.pexels.com/photos/5553058/pexels-photo-5553058.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meet counsellor" className="img-fluid" />
                        </div>
                        <a href='/' className={`text-center ${theme}`}>Meet counsellor for Creative art</a>
                    </div >
                    <div className="col-md-3 text-center lists">
                        <div >
                            <img src="https://images.pexels.com/photos/5553938/pexels-photo-5553938.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meet counsellor" class="img-fluid" />
                        </div>
                        <a href='/' className={`text-center ${theme}`}>Meet counsellor for Growth</a>
                    </div >
                    <div className="col-md-3 text-center lists">
                        <div class="guidance__wrapper">
                            <img src="https://images.pexels.com/photos/5940718/pexels-photo-5940718.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meet counsellor" class="img-fluid" />
                        </div>
                        <a href='/' className={`text-center ${theme}`}>Meet counsellor for Development</a>
                    </div >
                    <div className="col-md-3 text-center lists">
                        <div class="guidance__wrapper">
                            <img src="https://images.pexels.com/photos/5553974/pexels-photo-5553974.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meet counsellor" class="img-fluid" />
                        </div>
                        <a href='/' className={`text-center ${theme}`}>Meet counsellor for Social skills</a>
                    </div >
                    <div className="col-md-3 text-center lists">
                        <div class="guidance__wrapper">
                            <img src="https://images.pexels.com/photos/5965713/pexels-photo-5965713.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Meet counsellor" class="img-fluid" />
                        </div>
                        <a href='/' className={`text-center ${theme}`}>Meet counsellor for Resilience</a>
                    </div>
                </div >
            </div >
        </section >
        
    );
};

Carrier.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
  };

export default Carrier;