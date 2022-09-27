import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import { addToDb, getData } from '../utilities/fakedb';
import './Shop.css';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
        const storeCart = getData();
        const savedCart = [];
        for(const id in storeCart){
            const addProduct = products.find(product => product.id === id)
            if(addProduct){
                const quantity = storeCart[id];
                addProduct.quantity =quantity;
                savedCart.push(addProduct);
            }
        }
        setCart(savedCart)
    },[products])
    const handleBtn = (id) => {
        const newCart = [...cart, id];
        setCart(newCart);
        addToDb(id.id)
        console.log(newCart);
        }
    return (
        <div className='container'>
            <Product handleBtn={handleBtn} products={products}></Product>
            <Order cart={cart}></Order>
        </div>
    );
};

export default Shop;