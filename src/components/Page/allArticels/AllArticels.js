import React, { useEffect } from 'react';
import { useState } from 'react';
import Articel from './Articel/Articel';
import './AllArticels.css'

const AllArticels = () => {
const [articels,setArticels]=useState([])
useEffect(()=>{
    fetch('https://raw.githubusercontent.com/coderSabbirr/json/main/articles.json')
    .then(res=>res.json())
    .then(data=>setArticels(data))
},[])
    return (
        <div className="container articels-sec">
            <h2 className="text-center mt-5 custom-color">Articels</h2>
           <div className="articels">
           {
               articels?.map(articel =><Articel
                articel={articel}
                key={articel.id}
               ></Articel>) 
            }
           </div>
        </div>
    );
};

export default AllArticels;