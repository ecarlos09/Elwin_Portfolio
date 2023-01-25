import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Button, Container }  from 'react-bootstrap';
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
                        <Nav className="mr-auto" className="top-nav">
                            <div className="links">
                                <NavLink exact to="/" activeClassName="current">Home</NavLink>
                                <NavLink to="/projects" activeClassName="current">Projects</NavLink>
                            </div>
                            <div className="nav-dropdown">
                                <NavDropdown title="More">
                                    <Navbar.Text className="drop-link" onClick={handleSkills}>Skills</Navbar.Text>
                                    <Navbar.Text className="drop-link" onClick={handleGame}>Game</Navbar.Text>
                                    <Navbar.Text className="drop-link" onClick={handleContact}>Contact</Navbar.Text>
                                </NavDropdown>
                            </div>
                            {/* <div className="history">
                                <Button onClick={history.goBack()}>Back</Button>
                                <Button onClick={history.goForward()}>Forward</Button>
                            </div> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </section>
    )
}

export default NavBar;