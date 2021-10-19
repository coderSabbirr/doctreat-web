import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart/ServicesCart';
import './Services.css'

const Seevices = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div id="services">
            <div className="services-sec" >
            <div className="services container">
        <h1>Our Services</h1>
        <div className="all-services">
            {
            services.map(service=><ServicesCart
                service={service}
                key={service.key}
            
            ></ServicesCart>)
        }
        </div>
        </div>
        </div>
        </div>
    );
};

export default Seevices;