import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

// Images
import hsr_banner from '../../images/hsr_1.0_banner.png';
import tb_pfp from '../../images/pfps/tb_pfp.png';
import m7_pfp from '../../images/pfps/m7_pfp.png';
import dan_pfp from '../../images/pfps/dan_pfp.png';
import himeko_pfp from '../../images/pfps/himeko_pfp.png';
import welt_pfp from '../../images/pfps/welt_pfp.png';

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
                                <p><a href="https://hsr.hoyoverse.com/en-us/">Honkai: Star Rail</a> is a turn based strategy RPG title created by the makers of <a href="https://genshin.hoyoverse.com/en/">Genshin Impact</a> and <a href="https://honkaiimpact3.hoyoverse.com/global/en-us/fab">Honkai Impact</a>, Hoyoverse. Come aboard  the Astral Express and explore through the endless reaches of the universe filled with adventures and thrills.</p>
                                <p>This wiki is an English resource for information about the Global version of the game. There are <span id='spoilers'>unmarked spoilers</span> on this wiki.</p>
                            </div>
                            {/* Navigation for each character's page on Homepage */}
                            <div id='home-chars'>
                                <Link to={'/chars'}><h3>Characters</h3></Link>
                                <div id='grid-chars'>
                                    <Link to={'/chars/667bc2a2c026d5d119784bb6'} style={{ textDecorationColor: 'none' }}>
                                        <div id='box-char'>
                                            <img src={tb_pfp} alt="Trailblazer" />
                                            <p>Trailblazer</p>
                                        </div>
                                    </Link>
                                    <Link to={'/chars/667bc2a2c026d5d119784bc6'}>
                                        <div id='box-char'>
                                            <img src={m7_pfp} alt="March 7th" />
                                            <p>March 7th</p>
                                        </div>
                                    </Link>
                                    <Link to={'/chars/667bc2a2c026d5d119784bd7'}>
                                        <div id='box-char'>
                                            <img src={dan_pfp} alt="Dan Heng" />
                                            <p>Dan Heng</p>
                                        </div>
                                    </Link>
                                    <Link to={'/chars/667bc2a2c026d5d119784be8'}>
                                        <div id='box-char'>
                                            <img src={himeko_pfp} alt="Himeko" />
                                            <p>Himeko</p>
                                        </div>
                                    </Link>
                                    <Link to={'/chars/667bc2a2c026d5d119784bf9'}>
                                        <div id='box-char'>
                                            <img src={welt_pfp} alt="Welt Yang" />
                                            <p>Welt Yang</p>
                                        </div>
                                    </Link>
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