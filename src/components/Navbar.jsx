import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import homeLogo from '../images/icons/data_bank_logo.png';
import charLogo from '../images/icons/char_logo.png';
import aeonLogo from '../images/icons/aeon_logo.png';

import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='sidebar'>
            <div id='logo'>
                <Link to={'/'}>
                    <img src="https://img.game8.co/3813760/074c63ab10d14d5167115468e52a0005.png/show" alt="logo" />
                    <p>HSR Wiki</p>
                </Link>
            </div>
            <hr />
            <div id='options'>
                <Link to={'/'}>
                    <img src={homeLogo} alt="Home" />
                    <p>Home</p>
                </Link>
                <Link to={'/chars'}>
                    <img src={charLogo} alt="Characters" />
                    <p>Characters</p>
                </Link>
                <Link to={'/aeons'}>
                    <img src={aeonLogo} alt="Aeons" />
                    <p>Aeons</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar