import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className="d-block">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand className="text-info">IELTS-Course</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink 
                                    to="/home" 
                                    className="text-light"
                                    style={{
                                        textDecoration: "none",
                                        padding: "10px"
                                    }}
                                    activeStyle={{
                                        fontWeight: "bold"
                                    }}
                                >Home</NavLink>
                                <NavLink 
                                    to="/about" 
                                    className="text-light"
                                    style={{
                                        textDecoration: "none",
                                        padding: "10px"
                                    }}
                                    activeStyle={{
                                        fontWeight: "bold"
                                    }}
                                >About</NavLink>
                                <NavLink 
                                    to="/services" 
                                    className="text-light"
                                    style={{
                                        textDecoration: "none",
                                        padding: "10px"
                                    }}
                                    activeStyle={{
                                        fontWeight: "bold"
                                    }}
                                >Services</NavLink>
                                <NavLink 
                                    to="/notices" 
                                    className="text-light"
                                    style={{
                                        textDecoration: "none",
                                        padding: "10px"
                                    }}
                                    activeStyle={{
                                        fontWeight: "bold"
                                    }}
                                >Notices</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;