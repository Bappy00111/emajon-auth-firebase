import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const handleSingOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error => {
                console.log(error)
            }))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/singup">Singup</Link>
                <Link to="/login">Login</Link>

            </div>
            <div>
                {
                    user && 
                     <span className='font-color'>{user.email} 
                     <button onClick={handleSingOut}>SingOut</button></span> 
                    
                          
                }
            </div>
        </nav>
    );
};

export default Header;