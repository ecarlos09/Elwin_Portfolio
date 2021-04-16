import React from 'react';

import mostUsed from '../../assets/most-used.jpg';
import gitStats from '../../assets/git-stats.jpg';

import { Game } from '../../layout';

const GithubStats = () => {
    return (
        <>
            <img src={mostUsed} />
            <img src={gitStats} />
        </>
    )
}

export default GithubStats;