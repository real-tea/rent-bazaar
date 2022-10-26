import React from 'react';
import { BubblyLink } from 'react-bubbly-transitions';
import './Register.css';
export default function Register() {
    return (
        <form className='login-form'>
            <ul className='login-text-fields'>
                <li><input className='input-field' type='text' placeholder='College Email'></input></li>
                <li><input className='input-field' type='number' placeholder='College PRN'></input></li>
                <li><input className='input-field' type='password' placeholder='Create Password'></input><input className='tick-box' type="checkbox"></input></li>
                <li><input className='input-field' type='password' placeholder='Confirm Password'></input></li>
            </ul>
            <button className='login-btn' type='submit'>Login</button>
            Already registered <BubblyLink to='/login'>Login Here</BubblyLink>
        </form>
    )
}
