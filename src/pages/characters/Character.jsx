import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../styles/Character.css'

// Components
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

function Character() {

    // useState for Character
    const [char, setChar] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://nguyen-john-hsr-wiki-backend.onrender.com/chars/${id}`)
            .then(data => data.json())
            .then(result => setChar(result))

        return () => {
            console.log(char)
        };

    }, [id]);

    console.log(`Char: ${JSON.stringify(char)}`)

    return (
        <>
            <div className='character'>
                <Navbar />
                <div className='right'>
                    <Header title={'Honkai: Star Rail Wiki'} />
                    <div id='char-info'>

                        <div id='content'>

                            <div id='header'>
                                <h1>{char.name}</h1>
                                <hr />
                            </div>
                            {/* Introductory Info Section */}
                            <div id='info'>
                                <div id='intro'>
                                    <h2 id='subtitle'>Overview <hr /></h2>
                                    <div id='quote'>
                                        <p >"When there is the chance to make a choice, make one that you know you won't regret..."</p>
                                    </div>
                                    <div id='details'>
                                        {char.story && char.story.stories && char.story.stories.slice(0, 1).map(data => (
                                            <div>
                                                <p>{data.excerpt}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Character Portrait with details underneath */}
                                <div id='sidebar'>
                                    <h3>{char.name}</h3>
                                    <img src={char.splash} alt="Splash Art" />
                                    <h5>Path <span>{char.path}</span></h5>
                                    <h5>Element <span>{char.element}</span></h5>
                                    <h5>Faction <span>{char.faction}</span></h5>
                                </div>
                            </div>
                            {/* Story Section */}
                            <div id='story'>
                                <h2 id='subtitle'>Story <hr /></h2>
                                {/* Details */}
                                <div id='stories'>
                                    <h3>Character Details</h3>
                                    {char.story && char.story.stories && char.story.stories.slice(0, 1).map(data => (
                                        <div>
                                            <pre id='excerpt'>{data.excerpt}</pre>
                                        </div>
                                    ))}
                                </div>
                                {/* Story 1 */}
                                <div id='stories'>
                                    <h3>Character Story: Part 1</h3>
                                    {char.story && char.story.stories && char.story.stories.slice(1, 2).map(data => (
                                        <div>
                                            <pre id='excerpt'>{data.excerpt}</pre>
                                        </div>
                                    ))}
                                </div>
                                {/* Story 2 */}
                                <div id='stories'>
                                    <h3>Character Story: Part 2</h3>
                                    {char.story && char.story.stories && char.story.stories.slice(2, 3).map(data => (
                                        <div>
                                            <pre id='excerpt'>{data.excerpt}</pre>
                                        </div>
                                    ))}
                                </div>
                                {/* Story 3 */}
                                <div id='stories'>
                                    <h3>Character Story: Part 3</h3>
                                    {char.story && char.story.stories && char.story.stories.slice(3, 4).map(data => (
                                        <div>
                                            <pre id='excerpt'>{data.excerpt}</pre>
                                        </div>
                                    ))}
                                </div>
                                {/* Ternary to show Story 4 only if character has it */}
                                <div id='stories'>
                                    {char.story && char.story.stories && char.story.stories.slice(4, 5).map(data => (
                                        <div>
                                            <h3>Character Story: Part 4</h3>
                                            <pre id='excerpt'>{data.excerpt}</pre>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills Display */}
                            <div id='skills'>
                                <h2 id='subtitle'>Skills <hr /></h2>
                                {char.traces && char.traces.skills && char.traces.skills.map(skill => (
                                    <div>
                                        <h3>{skill.name}</h3>
                                        <h4>{skill.title} - {skill.targetting}</h4>
                                        <p>{skill.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Awakenings Display */}
                            <h2 id='a-subtitle'>Awakening Traces <hr /></h2>
                            <div id='awakenings'>
                                {char.traces && char.traces.awakenings && char.traces.awakenings.map(skill => (
                                    <div id='a-trace'>
                                        <h3>{skill.name}</h3>
                                        <h4>Trace A{skill.stage} </h4>
                                        <hr />
                                        <p>{skill.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Bonus Trace Stats */}
                            <h2 id='a-subtitle'>Trace Bonus Stats <hr /></h2>
                            <div id='bonus'>
                                {char.traces && char.traces.stats && char.traces.stats.map(skill => (
                                    <div id='a-stats'>
                                        <h3>{skill.stat} - {skill.amt}%</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Character