import React, { useEffect } from 'react';
import { useState } from 'react';
import Specialist from './Specialist/Specialist';
import './Specialists.css'

const Specialists = () => {
    const [specialists,setspecialists]=useState([])
    useEffect(()=>{
        fetch('./specialists.json')
        .then(res=>res.json())
        .then(data =>setspecialists(data))
    },[])
    return (
        <div className="specialists container">
           <h2>Meet Our Professionals</h2> 
           <h1>Top Rated <span className="custom-color">Specialists</span></h1>
           <div className="specialist_cart">
               {
                   specialists.map(specialist=><Specialist
                    specialist={specialist}
                    key={specialist.id}
                   >

                   </Specialist>)
               }
           </div>
        </div>
    );
};

export default Specialists;