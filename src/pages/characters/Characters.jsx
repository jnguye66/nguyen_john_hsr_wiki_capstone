import React from 'react';

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

                            <div id='grid-chars'>
                                <div id='box-char'>
                                    <img src={tb_pfp} alt="Trailblazer" />
                                    <p>Trailblazer</p>
                                </div>
                                <div id='box-char'>
                                    <img src={m7_pfp} alt="March 7th" />
                                    <p>March 7th</p>
                                </div>
                                <div id='box-char'>
                                    <img src={dan_pfp} alt="Dan Heng" />
                                    <p>Dan Heng</p>
                                </div>
                                <div id='box-char'>
                                    <img src={himeko_pfp} alt="Himeko" />
                                    <p>Himeko</p>
                                </div>
                                <div id='box-char'>
                                    <img src={welt_pfp} alt="Welt Yang" />
                                    <p>Welt Yang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Characters