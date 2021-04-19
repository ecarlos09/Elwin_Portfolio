import React from 'react';

import { NavBar } from '../../layout';
import { ProjectInfo } from '../../components';

const Projects = () => {
    return (
        <>
            <NavBar />
            <h1>Check out some of my most recent work!</h1>
            <ProjectInfo />
        </>
    )
}

export default Projects;