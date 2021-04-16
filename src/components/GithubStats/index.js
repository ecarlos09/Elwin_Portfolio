import React from 'react';
import { NavLink } from 'react-router-dom';

import mostUsed from '../../assets/most-used.jpg';
import gitStats from '../../assets/git-stats.jpg';

import './style.css';

const GithubStats = () => {
    return (
        <section className="git-stats" >

            <h2>Technical Skills</h2>

            <div className="git-stats-content">                
                <div className="git-stats">
                    <img src={mostUsed} />
                    <img src={gitStats} />
                </div>
                
                <div id="git-stats-blurb">
                    <p>The infographics displayed are an overview of my current skill set and version control habits this year.</p>
                    <p>
                        Other technical skills include:
                        <ul>
                            <li>...</li>
                        </ul>
                    </p>     
                    <p>
                        <NavLink to="/projects" activeClassName="current">Click here</NavLink> to view a list of my most recent projects!
                    </p>           
                </div>
            </div>

        </section>
    )
}

export default GithubStats;