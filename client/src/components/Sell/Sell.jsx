import React from 'react';
import './Sell.css';

export default function Sell() {
    return (
        <div className='sell-wrapper'>
            <div className='sell-container'>
                <div className='sell-title'>Sell Item</div>
                <input className='sell-field' type='text' placeholder='Item Name'></input>
                <input className='sell-field' type='number' placeholder='Item Price (in ₹)'></input>
                <textarea className='sell-field' type='text' placeholder='Item Description' cols={10}></textarea>
                <button className='publish-btn'>Publish</button>
            </div>
        </div>
    )
}
