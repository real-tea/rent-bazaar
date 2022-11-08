import React, { useState, useEffect } from 'react';
import './Buy.css';
import Item from './Item';
import database from '../../services/firebase';


export default function Buy() {
    const getPostsFromFirebase = [];
    const [posts, setPosts] = useState([]);
    const subscriber = database.collection('items')
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
        const subscriber = database.collection('items')
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


    const [items, setItems] = useState(data);
    return (
        <div className='buy-container'>
            <div className='items-list'>
                {data.map((item) => (
                    <Item name={item.itemName} owner={item.itemOwner} price={item.itemPrice} description={item.itemDescription} key={item.id} />
                ))}
            </div>
        </div>
    )
}
