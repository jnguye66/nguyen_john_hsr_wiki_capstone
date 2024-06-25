import React from 'react';

// Components
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

// Images
import hsr_banner from '../../images/hsr_1.0_banner.png'

// Styles
import '../../styles/Homepage.css'

function Homepage() {
    return (
        <>
            <div className='home'>
                <Navbar />
                <div className='right'>
                    <Header title={'Honkai: Star Rail Wiki'} />
                    <div className='home-info'>
                        <div id='content'>
                            <div id='header'>
                                <h1>Home</h1>
                            </div>
                            <div id='welcome'>
                                <img src={hsr_banner} alt="welcome-banner" />
                                <div className='welcome-msg'>
                                    <h2 >Welcome to the Honkai: Star Rail Wiki!</h2>
                                    <h5>Official Links:</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage