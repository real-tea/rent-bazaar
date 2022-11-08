import React from 'react';
import './Navbar.css';
import { BubblyLink } from 'react-bubbly-transitions';
export default function Navbar() {
    return (
        <nav>
            <a href='/home'>Rent Bazaar</a>
            <ul className='nav-items'>
                <li className='nav-link'><BubblyLink to='/dashboard' colorStart='#56A4FF' colorEnd='#D7E9FF'>DASHBOARD</BubblyLink></li>
                <li className='nav-link'><BubblyLink to='/sell' colorStart='#56A4FF' colorEnd='#D7E9FF'>SELL</BubblyLink></li>
                <li className='nav-link'><BubblyLink to='/buy' colorStart='#56A4FF' colorEnd='#D7E9FF'>BUY</BubblyLink></li>
                <li className='nav-link'><BubblyLink to='/login' colorStart='#56A4FF' colorEnd='#D7E9FF'>ACCOUNT</BubblyLink></li>
            </ul>
        </nav>
    )
}
