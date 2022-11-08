import React, { useState } from 'react';
import './Buy.css';
import Item from './Item';

const temp_items = [
    {
        'id': 1,
        'name': 'Desk',
        'owner': 'Siddharth',
        'price': '₹400',
        'description': 'This is a desk.'
    },
    {
        'id': 2,
        'name': 'Chair',
        'owner': 'Siddharth',
        'price': '₹200',
        'description': 'This is a chair.'
    },
    {
        'id': 3,
        'name': 'Books',
        'owner': 'Siddharth',
        'price': '₹1000',
        'description': 'These are books.'
    }
]

export default function Buy() {
    const [items, setItems] = useState(temp_items);
    return (
        <div className='buy-container'>
            <div className='items-list'>
                {items.map((item) => (
                    <Item name={item.name} owner={item.owner} price={item.price} description={item.description} key={item.id} />
                ))}
            </div>
        </div>
    )
}
