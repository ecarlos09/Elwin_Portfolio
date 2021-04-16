import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const NavBar = () => {
    return (
        <nav>
            <div className="links">
                <NavLink exact to="/" activeClassName="current">Home</NavLink>
                <NavLink to="/projects" activeClassName="current">Projects</NavLink>
            </div>
        </nav>

    )
}

export default NavBar;