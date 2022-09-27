import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <div className='navigation'>
                <a href="/Order">Order</a>
                <a href="/Order-review">Order review</a>
                <a href="/Manage-Order">Manage Order</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;