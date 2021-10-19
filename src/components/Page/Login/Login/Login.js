import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle,setEmail,setPassword,handaleSignIn}= useAuth()
    const handaleEmailChange= e =>{
        setEmail(e.target.value);

    }
    const handalPasswordChange= e =>{
        setPassword(e.target.value);
    }


    return (
        <div className="text-center container  login-sec">
            <h2 className="mb-5">Log In</h2>
          <form action="">
          <div className="mb-3 row " >
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
    <input type="email" onChange={handaleEmailChange} className="form-control" id="inputemail" required/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" onChange={handalPasswordChange} className="form-control" id="inputPassword" required/>
    </div>
  </div>
  <p>New to DocTreat ?<Link to="/register">Register</Link></p>
<div className="two-btn-div"><button className="submit-btn" onClick={handaleSignIn}>Login</button> <button className="google-btn" onClick={signInUsingGoogle}>Sign in With Google</button></div>

          </form>
        </div>
    );
};

export default Login;