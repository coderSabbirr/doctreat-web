import React from 'react';
import thankyou from './thankyou.svg'
import './thank.css'

const ThankYou = () => {
    return (
        <div className="text-center thank-text">
            <h3 className="">Thank you !!</h3>
            <img width="500px" src={thankyou} alt="" />
        </div>
    );
};

export default ThankYou;