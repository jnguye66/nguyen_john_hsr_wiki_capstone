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
                                <div id='links'>
                                    <h3>Welcome to the Honkai: Star Rail Wiki!</h3>
                                    <h4>Official Links:</h4>
                                    <a href="https://hsr.hoyoverse.com/en-us/">Official Website  ✦ </a>
                                    <a href="https://www.hoyolab.com/home">HoyoLab Forums  ✦ </a>
                                    <a href="https://www.facebook.com/HonkaiStarRail/">Facebook  ✦ </a>
                                    <a href="https://x.com/honkaistarrail">Twitter  ✦ </a>
                                    <a href="https://www.youtube.com/@HonkaiStarRail">YouTube  ✦ </a>
                                    <a href="https://www.reddit.com/r/HonkaiStarRail/">Reddit ✦ </a>
                                    <br />
                                    <br />
                                    <a href="https://discord.com/invite/honkaistarrail">Discord  ✦ </a>
                                    <a href="https://www.instagram.com/honkaistarrail/">Instagram  ✦ </a>
                                    <a href="https://www.tiktok.com/@honkaistarrail_official">TikTok</a>
                                </div>
                            </div>

                            <div id='about'>
                                <h3>About the Game</h3>
                                <p><a href="https://hsr.hoyoverse.com/en-us/">Honkai: Star Rail</a> is a turn based strategy RPG title created by the makers of Genshin Impact and Honkai Impact, Hoyoverse. Come aboard  the Astral Express and explore through the endless reaches of the universe filled with adventures and thrills.</p>
                                <p>This wiki is an English resource for information about the Global version of the game. There are <span>unmakred spoilers</span> on this wiki.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage