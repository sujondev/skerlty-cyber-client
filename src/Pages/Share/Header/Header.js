import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container className='mt-3'>
                <Navbar.Brand href="#home"><img src="https://html.designingmedia.com/whizcyber/assets/images/whiz-cyber-logo.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none fw-semibold nav-link ms-3' to="/">Home</Link>
                        <Link className='text-decoration-none fw-semibold nav-link ms-3' to="/">Order</Link>
                        <Link className='text-decoration-none fw-semibold nav-link ms-3' to="/">Blog</Link>
                        <Link className='text-decoration-none fw-semibold nav-link ms-3' to="/login">Login</Link>
                        <Link className='ms-4'><button className='btn border-rounded fw-bold contact-btn'>Contact us</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;