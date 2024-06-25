import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

// Page Imports
import Homepage from '../pages/homepage/Homepage';
import Characters from '../pages/characters/Characters';
import Enemies from '../pages/enemy/Enemies';
import Aeons from '../pages/aeons/Aeons';

import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <Link to={'/home'}>
                    <img src="https://img.game8.co/3813760/074c63ab10d14d5167115468e52a0005.png/show" alt="logo" />
                </Link>
            </div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/chars'}>Characters</Link>
            <Link to={'/aeons'}>Aeons</Link>
            <Link to={'/enemy'}>Enemies</Link>
        </div>
    )
}

export default Navbar