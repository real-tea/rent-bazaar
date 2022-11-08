import React, { useState } from 'react';
import { BubblyLink } from 'react-bubbly-transitions';
import database from '../../services/firebase';
import './Register.css';
export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [prn, setPrn] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const sendDataToCollection = async () => {
        await database.collection("userDetails").add({
            email: email,
            name: name,
            prn: prn,
            phone: phone,
            password: password,
            confirmPassword: confirmPassword
        })
            .then((docRef) => {
                alert("Data Successfully Submitted");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    return (
        <form>
            <div className='register-container'>
                <div className='register-fields'>
                    <p className='register-title'>USER REGISTER</p>
                    <input className='register-field' type={'text'} placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                    <input className='register-field' type={'email'} placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input className='register-field' type={'prn'} placeholder='Your PRN' value={prn} onChange={(e) => setPrn(e.target.value)}></input>
                    <input className='register-field' type={'phone'} placeholder='Your Phone' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                    <input className='register-field' type={'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <input className='register-field' type={'confirmPassword'} placeholder='Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    <button className='register-btn' onClick={(e) => { e.preventDefault(); sendDataToCollection(email, name, prn, phone, password, confirmPassword) }}>Register</button>
                    <div className='register-redirect'><BubblyLink to='/login' colorStart='#56A4FF' colorEnd='#D7E9FF'>Click here to <b>login</b></BubblyLink></div>
                </div>
            </div>
        </form>
    )
}

{/*                 
    <input className='register-field' type={'email'} placeholder='Your College Email' value={email} onChange={(e) => setEmail(e.target.value)} />
    <input className='register-field' type={'text'} placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
    <input className='register-field' type={'text'} placeholder='Your PRN' value={prn} onChange={(e) => setPrn(e.target.value)} />
    <input className='register-field' type={'number'} placeholder='Your Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
    <input className='register-field' type={'password'} placeholder='Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
    <input className='register-field' type={'password'} placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
*/}