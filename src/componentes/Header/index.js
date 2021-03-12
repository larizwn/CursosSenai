import React from 'react';
import './style.css';
import logo from './logo.png';

function Header() {
    return(
        <header><img src={logo} id="logo" alt="logo"/>
        <h2>Senai Suíço-Brasileira "Paulo Ernesto Tolle"</h2></header>
    );
}

export default Header;