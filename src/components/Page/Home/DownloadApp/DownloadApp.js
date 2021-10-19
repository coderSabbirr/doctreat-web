import React from 'react';
import './DownloadApp.css'

const DownloadApp = () => {
    return (
      <div className="downloadApp-sec">
            <div className=" container d-flex downloadApp">
            <div className="">
                <img src="https://i.ibb.co/JCYhxbV/img-01-4.png" alt="" />
            </div>
            <div className="app-dec">
                <h2>Care On The GO</h2>
                <h3 className="custom-color">Download Mobile App</h3>
                <p>ClearCare's mobile app helps streamline communication between agencies and caregivers, allowing for more efficient care and smoother operations</p>
                <div>
                    <img className="me-3" src="https://i.ibb.co/4d3WTY7/img-03.png" alt="" />
                    <img src="https://i.ibb.co/HGkWcng/img-02.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    );
};

export default DownloadApp;