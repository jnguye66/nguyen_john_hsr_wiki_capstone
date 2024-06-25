import React from 'react'

import '../styles/Header.css'

function Header({ title }) {
    return (
        <div className='header'>
            <div className='top'>
                <img src="https://64.media.tumblr.com/f320069051e847c06a023c9e6b665395/c069f0f3570cb057-3b/s400x600/32fbd271835c66869e0b6cb7146ba10427fa1431.png" alt="hsr-logo" />
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Header