import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container }  from 'react-bootstrap';

import './style.css';

const NavBar = () => {
    return (
        <Container fluid>
            <Navbar expand="md" fixed="top">
            <Navbar.Brand href="#home">Elwin's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <div className="links">
                            <NavLink exact to="/" activeClassName="current">Home</NavLink>
                            <NavLink to="/projects" activeClassName="current">Projects</NavLink>
                        </div>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item>About</NavDropdown.Item>
                            <NavDropdown.Item>Game</NavDropdown.Item>
                            <NavDropdown.Item>Contact</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavBar;