import React from 'react';
import { Link } from 'react-router-dom';
import './Specialist.css'
const Specialist = (props) => {
    const{id,tag,name,docinfo,available,img}=props.specialist;

    return (
        <div className="mt-4 ">
           <div className="card all-cart">
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
      <h6>{tag}</h6>
    <h3>{name}</h3>
    <p>{docinfo}</p>
    <p className="avail">{available}</p>
    <div className="btn-two">
    <Link to={`/booking/${id}`}><button className="doc-contect">Contect Us</button></Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Specialist;