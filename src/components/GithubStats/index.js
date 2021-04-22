import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import mostUsed from '../../assets/most-used.jpg';
import gitStats from '../../assets/git-stats.jpg';

import './style.css';

const GithubStats = () => {
    return (
        <Container className="git-stats" fluid>

            <h2>Technical Skills</h2>

            <div className="git-stats-content">  
                
                <div id="git-stats-blurb">
                    <p>The infographics displayed are an overview of my current skill set and version control habits this year.</p>
                    <p>
                        Other technical skills and achievements include:
                    </p>   
                    <ul>
                        <li>Working knowledge of JavaScript frameworks, such as Express.js and React</li>
                        <li>Completed OU course on Data Science with Python</li>
                        <li>Completed introductory course on Ruby with Codecademy</li>                            
                        <li>Proficient user of MS Word and Excel</li>
                        <li>Working knowledge of Google and it's associatd web apps</li>
                        <li>Beginner's knowledge of C++</li>
                    </ul>  
                    <p>
                        <NavLink to="/projects" activeClassName="current">Click here</NavLink> to view a list of my most recent projects!
                    </p>           
                </div>

                <div className="git-stats">
                    <img src={mostUsed} />
                    <img src={gitStats} />
                </div>
                
            </div>

        </Container>
    )
}

export default GithubStats;