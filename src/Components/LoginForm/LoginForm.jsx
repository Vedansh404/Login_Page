import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm =  ()=> {
  return (
    <div className='wrapper'>
        <form>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required>
                </input>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required>
                </input>
                <FaLock className='icon'/>
            </div>

            <div className='remember-forgot'>
                <label> <input type='checkbox'/> Remember me</label>
                <a href='#'> Forgot Password?</a>
                
            </div>

            <button className='submit'> Login</button>

            <div className='register-link'>
                <p>Don't have an account?</p>
                <a href="#"> Register</a>
            </div>
        </form>
    </div>
  );
}

export default LoginForm
