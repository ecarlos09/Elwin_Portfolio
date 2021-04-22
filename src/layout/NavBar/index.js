import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Container }  from 'react-bootstrap';
import './style.css';

const NavBar = ({ handleStart, handleSkills, handleGame, handleContact }) => {
    const history = useHistory();

    return (
        <section className="nav">
            <Container fluid>
                <Navbar expand="md" fixed="top">
                <Navbar.Brand onClick={handleStart}>Elwin's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <div className="links">
                                <NavLink exact to="/" activeClassName="current">Home</NavLink>
                                <NavLink to="/projects" activeClassName="current">Projects</NavLink>
                            </div>
                            <NavDropdown title="More" className="nav-dropdown">
                                <Navbar.Text className="drop-link" onClick={handleSkills}>Skills</Navbar.Text>
                                <Navbar.Text className="drop-link" onClick={handleGame}>Game</Navbar.Text>
                                <Navbar.Text className="drop-link" onClick={handleContact}>Contact</Navbar.Text>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </section>
    )
}

export default NavBar;