import React, { useState } from 'react';
import './Dashboard.css';
import { BubblyLink } from 'react-bubbly-transitions';

const temp_user = {
    'name': 'Siddharth Khatri',
    'prn': 20070124032,
    'email': 'siddharth.siddharth.btech2020@sitpune.edu.in'
}

export default function Dashboard() {
    const [user, setUser] = useState(temp_user);
    return (
        <div className='dashboard-container'>
            <div className='user-details'>
                <p className='user-details-field' id='user-details-title'>User Details</p>
                <p className='user-details-field' id='user-name'><span className='user-details-label'>Name: </span>{user.name}</p>
                <p className='user-details-field' id='user-prn'><span className='user-details-label'>PRN: </span>{user.prn}</p>
                <p className='user-details-field' id='user-email'><span className='user-details-label'>Email: </span>{user.email}</p>
                <div className='nav-buttons'>
                    <BubblyLink colorStart='#56A4FF' colorEnd='#D7E9FF' to='/buy'><button className='buy-btn'>Buy</button></BubblyLink>
                    <BubblyLink colorStart='#56A4FF' colorEnd='#D7E9FF' to='/sell'><button className='sell-btn'>Sell</button></BubblyLink>
                </div>
            </div>
        </div>
    )
}
