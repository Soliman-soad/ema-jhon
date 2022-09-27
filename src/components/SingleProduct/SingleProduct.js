import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleProduct.css';


const SingleProduct = ({products}) => {
    const element = <FontAwesomeIcon icon={faCartShopping} />

    console.log(products);
    return (
        <div className='product'>
            <img src={products.img} />
            <div className='product-details'>
                <h3>{ products.name}</h3>
                <h5>Price: ${products.price}</h5>
                <p><small>manufacture: {products.seller} </small></p>
                <p><small>Ratings: {products.ratings} star</small></p>
            </div>
                <button>Add to cart {element} </button>
        </div>
    );
};

export default SingleProduct;