import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const bold= {
    fontWeight:'bold'
}

export const Header = () => (
    <div className="header">
        <Link className ="logo-container" to='/'>
            <h1 style ={{margin:'13px'}}>SACKFLIX</h1>
        </Link>
        <div className="options">
            <Link style = {bold} className="option" to='/anime'>ANIME</Link>
            <Link style = {bold} className="option" to='/contact'>CONTACT</Link>
            <Link style = {bold} className="option" to='/login'>SIGN IN</Link>
        </div>
    </div>
)