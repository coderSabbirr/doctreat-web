import React from 'react';
import './ServicesCart.css'
const ServicesCart = (props) => {
    const{name,dec,img}=props.service;
    return (
        <div className="services_cart" >
            <img src={img} width="60px" height="50px" alt="" />
            <h6>{name}</h6>
            <p>{dec}</p>
        </div>
    );
};

export default ServicesCart;