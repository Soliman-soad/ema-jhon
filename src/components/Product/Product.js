import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Product.css';

const Product = ({products}) => {
    return (
        <div className='products'>
            {
                products.map(productData => <SingleProduct products={productData}></SingleProduct>)
            }
        </div>
    );
};

export default Product;