import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css'

const Register = () => {
const{setEmail,setPassword,signInUsingGoogle,setName,handalRegistration}=useAuth()



const handalNameChange = e =>{
  setName(e.target.value)
}
    const handaleEmailChange= e =>{
        setEmail(e.target.value);

    }
    const handalPasswordChange= e =>{
        setPassword(e.target.value);
    }

    return (
            <div className="">
               <div className="text-center container register   login-sec">
                <h1 className="text-center mb-5 custom-color">Register Here</h1>
          <div className="mb-3 row " >
          <label  className="col-sm-2 mb-2 col-form-label">Name</label>
    <div className="col-sm-10">
    <input type="name" className="form-control" onChange={handalNameChange} id="name" required />
    </div>
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
    <input type="email" className="form-control" onChange={handaleEmailChange} id="inputemail" required />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" onChange={handalPasswordChange}  className="form-control" id="inputPassword" required />
    </div>
  </div>
  <p className="new-user">Alredy have an acoount? <Link to="/login">Login</Link></p>
<div className="two-btn-div"><button className="submit-btn" type="submit" onClick={handalRegistration} >Create Account</button> <button className="google-btn" onClick={signInUsingGoogle}>Sign in With Google</button></div>
     
            </div>
               
        </div>
    );
};

export default Register;