import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Menu.css';

// main menu component
const Menu = () => {
    return (
        // main menu navbar
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='me-5' href="/home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className='fs-5 link' to="/home">Home</NavLink>
                    <NavLink className='fs-5 link' to="/courses">Courses</NavLink>
                    <NavLink className='fs-5 link' to="/about">About</NavLink>
                    <NavLink className='fs-5 link' to="/blog">Blog</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;