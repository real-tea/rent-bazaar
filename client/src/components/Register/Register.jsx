import React from 'react';
import { BubblyLink } from 'react-bubbly-transitions';
import './Register.css';
export default function Register() {
    return (
        <div className='register-container'>
            <div className='register-fields'>
                <p className='register-title'>USER REGISTRATION</p>
                <input className='register-field' type='text' placeholder='College Email'></input>
                <input className='register-field' type='number' placeholder='College PRN'></input>
                <input className='register-field' type='text' placeholder='Your Name'></input>
                <input className='register-field' type='number' placeholder='Phone Number'></input>
                <input className='register-field' type='password' placeholder='Create Password'></input>
                <input className='register-field' type='password' placeholder='Confirm Password'></input>
                <button className='register-btn'>Register</button>
                <div className='login-redirect'><BubblyLink to='/login' colorStart='#56A4FF' colorEnd='#D7E9FF'>Click here to <b>login</b></BubblyLink></div>
            </div >
        </div >
    )
}
