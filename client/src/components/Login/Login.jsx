import React from 'react';
import './Login.css';
import { BubblyLink } from 'react-bubbly-transitions';

export default function Login() {
    return (
        <div className='login-container'>
            <div className='login-fields'>
                <p className='login-title'>USER LOGIN</p>
                <input className='login-field' id='college-email' type={'email'} placeholder='Your College Email' />
                <input className='login-field' id='password' type={'password'} placeholder='Your Password' />
                <button className='login-btn'>Login</button>
                <div className='register-redirect'><BubblyLink to='/register' colorStart='#56A4FF' colorEnd='#D7E9FF'>Click here if you are not <b>registered</b></BubblyLink></div>
            </div>
        </div >
    )
}
