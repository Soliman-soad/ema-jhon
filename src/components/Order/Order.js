import React from 'react';
import './Order.css';

const Order = (props) => {
    let total = 0;
    let shippingCost =0;
    for(const product of props.cart){
        total = total + product.price;
        shippingCost = shippingCost + product.shipping;
    }
    let tax = parseFloat((total*0.1).toFixed(2));
    return (
        <div className='order-container'>
            <h3>Order list</h3>
            <p>Product selected: {props.cart.length}</p>
            <p>Total price: {total} </p>
            <p>Total shopping charge:{shippingCost} </p>
            <p>Tax: {tax} </p>
            <p>Grand total: {total+shippingCost+tax} </p>
        </div>
    );
};

export default Order;