import React, { useState } from 'react';
import './Sell.css';
import database from '../../services/firebase';

export default function Sell() {
    const listItem = async () => {
        if (itemName === '' || itemPrice === '' || itemDescription === '') {
            alert('Item name cannot be empty');
        }
        await database.collection("items").add({
            itemName: itemName,
            itemPrice: itemPrice,
            itemDescription: itemDescription
        })
            .then((docRef) => {
                alert("Item Listed Successfully");
            })
            .catch((error) => {
                console.error("Error listing item for selling: ", error);
            });
    }

    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    return (
        <form className='sell-wrapper'>
            <div className='sell-container'>
                <div className='sell-title'>Sell Item</div>
                <input className='sell-field' type='text' placeholder='Item Name' value={itemName} onChange={(e) => setItemName(e.target.value)}></input>
                <input className='sell-field' type='number' placeholder='Item Price (in ₹)' value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}></input>
                <textarea className='sell-field' type='text' placeholder='Item Description' cols={10} value={itemDescription} onChange={(e) => setItemDescription(e.target.value)}></textarea>
                <button className='publish-btn' onClick={(e) => { e.preventDefault(); listItem() }}>Publish</button>
            </div>
        </form>
    )
}
