import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css'

const Slider = () => {
    return (
        <div className="banner">
          <div className="banner-text">
          <h1> Welcome To Our Doc<span className="doctreat">treat</span></h1>
            <p>Thank you for choosing the Doctreat closest to where you live and work as the provider for your health care</p>
        <Link to="/thankyou"><button className="bnr-btn">Make an Appoitment</button></Link>
          </div>
        </div>
    );
};

export default Slider;