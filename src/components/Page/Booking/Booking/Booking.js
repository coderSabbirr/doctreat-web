import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Booking.css'

const Booking = () => {
    const{specialistId}= useParams()
    
    const [specialists,setspecialists]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/coderSabbirr/json/main/doctor.json')
        .then(res=>res.json())
        .then(data =>setspecialists(data))
    },[])
  
    const specialist =specialists?.find(pd=>pd?.id === specialistId)
    
    return (
        <div>
          {specialist?
           
    <div className="card singel-cart">
  <div><img src={specialist.img} className="card-img-top" alt="..."/></div>
  <div className="card-body">
  <h6>{specialist.tag}</h6>
    <h3>{specialist.name}</h3>
    <p>{specialist.docinfo}</p>
    <p>Country: {specialist.country}</p>
    <p className="avail">{specialist.available}</p>
    <p className="fee">Fee:100$</p>
    <Link to="/thankyou"><button className="doc-about mt-3">Confirm</button></Link>
  </div>
</div> 
                  :
                  <h1> </h1>
          }

           
        </div>
    );
};

export default Booking;