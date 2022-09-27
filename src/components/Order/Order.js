import React from 'react';
import './Order.css';

const Order = (props) => {
    return (
        <div className='order-container'>
            <h3>Order list</h3>
            <p>Product selected: {props.cart.length}</p>
            <p>Total price: </p>
            <p>Total shopping charge: </p>
            <p>Tax: </p>
            <p>Grand total: </p>
        </div>
    );
};

export default Order;