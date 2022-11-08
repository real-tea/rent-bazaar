import React from 'react';
import { BubblyLink } from 'react-bubbly-transitions';
import './Home.css';
export default function Home() {
    return (
        <div className='home-container'>
            <h1 className='home-title'>Rent Bazaar</h1>
            <p className='home-body'>An online platform for college students, by college students where they can buy and sell their out-of-need items to their juniors or friends in need.</p>
            <div className='home-nav-buttons'>
                <BubblyLink colorStart='#56A4FF' colorEnd='#D7E9FF' to='/buy'><button className='home-buy-btn'>Buy</button></BubblyLink>
                <BubblyLink colorStart='#56A4FF' colorEnd='#D7E9FF' to='/sell'><button className='home-sell-btn'>Sell</button></BubblyLink>
            </div>
        </div>
    )
}