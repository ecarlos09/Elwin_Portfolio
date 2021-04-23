import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Navbar, Nav, Container }  from 'react-bootstrap';
import './style.css';

const ProjectNavBar = ({ handleStart}) => {
    const history = useHistory();

    return (
        <section className="nav">
            <Container fluid>
                <Navbar expand="md" fixed="top">
                <Navbar.Brand onClick={handleStart}>Elwin's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" className="top-nav">
                            <div className="links">
                                <NavLink exact to="/" activeClassName="current">Home</NavLink>
                                <NavLink to="/projects" activeClassName="current">Projects</NavLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </section>
    )
}

export default ProjectNavBar;