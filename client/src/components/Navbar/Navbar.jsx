import React from 'react';
import './Navbar.css';
export default function Navbar() {
    return (
        <nav>
            <a href='/home'>Rent Bazaar</a>
            <ul className='nav-items'>
                <li className='nav-link'><a href='/dashboard'>DASHBOARD</a></li>
                <li className='nav-link'><a href='/sell'>SELL</a></li>
                <li className='nav-link'><a href='/buy'>BUY</a></li>
                <li className='nav-link'><a href='/login'>LOGIN</a></li>
            </ul>
        </nav>
    )
}
