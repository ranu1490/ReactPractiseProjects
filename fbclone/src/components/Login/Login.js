import React, { useState } from 'react';
import fbLogo from '../../asset/facebook-logo.svg';
import '../Login/Login.css'

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  });

  const [createAccount, setCreateAccount] = useState(false)

  const handleSubmit = (event)=>{
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  }

  const handleCreateAccount = ()=>{
    console.log('create new account');
    setCreateAccount(true);
  }
  

  return (
    <>
    <div className="container flex">
    <div className="login-page flex">
      <div >
        <img src={fbLogo} alt="Facebook logo" />
        <div className="text">
          <p>Facebook helps you connect and share</p>
          <p>with the people in your life.</p>
        </div>
      </div>
      {!createAccount &&
      <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email or phone number" 
            id='email'
            name='email'
            value={inputData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            name='password'
            value={inputData.password}
            onChange={handleChange}
            required 
          />
        <div className="link">
          <button type="submit" className="login">Login</button>
          <a href="#" className="forgot">Forgot password?</a>
        </div>
        <hr/>
        <div className="button">
          <a href="#" onClick={handleCreateAccount}>Create new account</a>
        </div>
      </form>}
    </div>
  </div>
    </>
  );
}

export default Login;
