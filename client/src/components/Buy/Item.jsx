import React from 'react';
import './Item.css';

export default function Item(props) {
    return (
        <div className='item-card'>
            <div className='item-content'>
                <p className='item-title'>Item: {props.name}</p>
                <p className='item-owner'>Owner: {props.owner}</p>
                <p className='item-price'>Price: {props.price}</p>
                <p className='item-description'>Description: {props.description}</p>
                <button className='item-contact' onClick={() => { alert(`Contact Owner at: +91 ${props.ownerPhone}`) }}>Contact Owner</button>
            </div>
        </div >
    )
}
