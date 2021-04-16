import React from 'react';

import consoulLogLanding from '../../assets/consoul-log-landing.jpg';
import consoulLogFeed from '../../assets/consoul-log-feed.jpg';
import habite from '../../assets/habite.jpg';
import choosic from '../../assets/choosic.jpg';

import './style.css';

const ProjectInfo = () => {
    return (
        <section className="projects">
            <div id="project-1">
                <div className="project-img">
                    <img src={consoulLogLanding} alt="Landing page for consoul.log"/>
                    <img src={consoulLogFeed} alt="Exampe feed for consoul.log"/>
                </div>

                <div className="project-links">
                    <a href="https://consoul-log.netlify.app/">
                        <i className="fab fa-chrome"></i>
                    </a>
                    <a href="https://github.com/ecarlos09/consoul-log">
                        <i className="fab fa-github"></i>
                    </a>
                </div>                
            </div>

            <div className="project-2">
                <div className="project-img">
                    <img src={habite}/>
                </div>

                <div className="project-links">
                    <a href="https://habite.netlify.app/">
                        <i className="fab fa-chrome"></i>
                    </a>
                    <a href="https://github.com/ecarlos09/co-habiters">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>    
            
            <div className="project-3">
                <div className="project-img">
                    <img src={choosic} />
                </div>

                <div className="project-links">
                    <a href="https://choosic-music.netlify.app/">
                        <i className="fab fa-chrome"></i>
                    </a>
                    <a href="https://github.com/ecarlos09/ee-music-app">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>        
        </section>
    )
}

export default ProjectInfo;