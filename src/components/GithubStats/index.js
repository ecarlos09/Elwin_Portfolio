import React from 'react';

import mostUsed from '../../assets/most-used.jpg';
import gitStats from '../../assets/git-stats.jpg';

import './style.css';

const GithubStats = () => {
    return (
        <section className="git-stats" >
            <img src={mostUsed} />
            <img src={gitStats} />
        </section>
    )
}

export default GithubStats;