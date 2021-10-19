import React from 'react';
import './ContectUs.css'

const ContectUs = () => {
    return (
        <div className="container contect">
            <h1 className="text-center custom-color">Contect Us</h1>
            <div className="d-flex contect-flex ">
        <div className="contect-text">
            <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/08/Contact-v2logo_06.png" alt="" />
            <h5>Always Get In Touch</h5>
            <h2>Our Contact Details</h2>
            <div className="">
                    <p><i className="fab fa-telegram-plane"></i> 123 New Street Melbourne Australia</p>
                    <p><a href="mailto:info@doctreact.com"><i className="fas fa-envelope"></i> info@doctreact.com</a></p>
                    <p><a href="tel:(0800) 1234 567891"><i className="fas fa-phone-alt"></i> (0800) 1234 567891</a></p>
                    <i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i><i className="fab fa-linkedin"></i><i className="fab fa-youtube"></i>
                </div>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155769.04496523307!2d-2.1001731248758673!3d52.40864573310539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487096cc487aaa0f%3A0x1da19be49da6bd29!2sRamsay%20Healthcare%20UK!5e0!3m2!1sen!2sbd!4v1634588517887!5m2!1sen!2sbd" width="600" height="450" title="map"  loading="lazy"></iframe>
        </div>
        </div>
        </div>
    );
};

export default ContectUs;