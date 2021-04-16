import React from 'react';

import consoulLogLanding from '../../assets/consoul-log-landing.jpg';
import consoulLogFeed from '../../assets/consoul-log-feed.jpg';
import habite from '../../assets/habite.jpg';
import choosic from '../../assets/choosic.jpg';

const Projects = () => {
    return (
        <section className="projects">
            <h3>Projects</h3>
            <div className="projects-list">
                <div className="project-1">
                    <img src={consoulLogLanding} alt="Landing page for consoul.log"/>
                    <img src={consoulLogFeed} alt="Exampe feed for consoul.log"/>
                    <a href="https://consoul-log.netlify.app/">
                        <i class="fab fa-chrome"></i>
                    </a>
                    <a href="https://github.com/ecarlos09/consoul-log">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

                <div className="project-2">
                    <img src={habite}/>
                    <a href="https://habite.netlify.app/">
                        <i class="fab fa-chrome"></i>
                    </a>
                    <a href="https://github.com/ecarlos09/co-habiters">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

                <div className="project-3">
                    <img src={choosic} />
                    <a href="https://choosic-music.netlify.app/">
                        <i class="fab fa-chrome"></i>
                    </a>
                    <a href="https://github.com/ecarlos09/ee-music-app">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>            
        </section>
    )
}

export default Projects;