import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav, Navbar } from "react-bootstrap";


export const Footer = () => {
    return (

        <Navbar expand='lg' variant='dark' bg='dark' sticky='bottom' id='footer'>
            <Nav className='ml-auto mr-auto'>
                <Navbar.Text id='copyright'>
                    <p>&copy; {new Date().getFullYear()} Devon Cox</p>
                </Navbar.Text>
            </Nav>
        </Navbar>

    )
}