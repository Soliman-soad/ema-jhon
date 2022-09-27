import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleBtn = (id) => {
        const newCart = [...cart, id];
        setCart(newCart);
        console.log(newCart);
        }
    return (
        <div className='container'>
            <Product handleBtn={handleBtn} products={products}></Product>
            <Order cart={cart} products={products}></Order>
        </div>
    );
};

export default Shop;