import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Product.css';

const Product = ({products, handleBtn}) => {
    return (
        <div className='products'>
            {
                products.map(productData => <SingleProduct handleBtn={handleBtn} products={productData}></SingleProduct>)
            }
        </div>
    );
};

export default Product;