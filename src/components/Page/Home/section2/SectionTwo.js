import React from 'react';
import { Link } from 'react-router-dom';
import './SectionTwo.css'
const sectionTwo = () => {
    return (
        <div className="container ">
            <div className="row section-two">
            <div className="col-md-4 col-sm-12 section-two-text">
          <h1>Bring Care to Your</h1>
          <h2 className="custom-color">Home With One Click</h2>
          <div className="btn-part">
          <button className="about-btn">About Us</button>
          <Link to="/thankyou"><button className="contect-btn">Contact</button></Link>
          </div>
            </div>
            <div className="col-md-6 col-sm-12">
<img src="https://i.ibb.co/2hcWsyS/Screenshot-138.jpg" alt="" />
            </div>
        </div>
        </div>
    );
};

export default sectionTwo;