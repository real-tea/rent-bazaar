import React, { useState, useEffect } from "react";
import "../../App.css";
import { BubblyLink } from "react-bubbly-transitions";
import database from "../../services/firebase";
import './Login.css';

const Login = () => {
    const [logged, setLogged] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const getPostsFromFirebase = [];
    const [posts, setPosts] = useState([]);
    const subscriber = database.collection('userDetails')
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setPosts(getPostsFromFirebase);
        });
    const data = posts;
    useEffect(() => {
        const subscriber = database.collection('userDetails')
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getPostsFromFirebase.push({
                        ...doc.data(),
                        key: doc.id,
                    });
                });
                setPosts(getPostsFromFirebase);
            });
        const data = posts;
    }, []);

    useEffect(() => {
    }, [logged]);

    return (
        <div>
            {logged ? <form>
                <div className='login-container'>
                    <div className='login-fields'>
                        <p className='login-title'>USER LOGIN</p>
                        <input className='login-field' type={'email'} placeholder='Your College Email' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                        <input className='login-field' type={'password'} placeholder='Your Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        <button className='login-btn' onClick={(e) => { console.log(data); e.preventDefault(); }}>Login</button>
                        <div className='register-redirect'><BubblyLink to='/register' colorStart='#56A4FF' colorEnd='#D7E9FF'>Click here if you are not <b>registered</b></BubblyLink></div>
                    </div>
                </div >
            </form> : <div className="login-container"><p className="login-title">User Logged In</p><button className="login-btn" onClick={() => { setLogged(false) }}>Log Out</button></div>}
        </div>
    );
};

export default Login;