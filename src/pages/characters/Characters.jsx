import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

// Images 
import tb_pfp from '../../images/pfps/tb_pfp.png';
import m7_pfp from '../../images/pfps/m7_pfp.png';
import dan_pfp from '../../images/pfps/dan_pfp.png';
import himeko_pfp from '../../images/pfps/himeko_pfp.png';
import welt_pfp from '../../images/pfps/welt_pfp.png';

// Styles
import '../../styles/Characters.css';

function Characters() {
    return (
        <>
            <div className='characters'>
                <Navbar />

                <div className='right'>
                    <Header title={'Characters'} />

                    <div className='char-info'>
                        <div id='content'>

                            <div id='header'>
                                <h1>Characters</h1>
                            </div>

                            <h3 id='astral-express-header'>Astral Express <hr /></h3>
                            <div id='grid-chars'>
                                <Link to={'/chars/667bc2a2c026d5d119784bb6'} >
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
        </>
    )
}

export default Characters