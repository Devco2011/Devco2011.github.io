import { React, useState } from 'react'
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap'
import './nav.css'
export const NavBar = (props) => {


    return (
        <>



            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Container className="justify-content-center">
                    <Row className="justify-content-center">
                        <Navbar.Brand href="#home">DEVON COX</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#about">ABOUT</Nav.Link>
                                <Nav.Link href="#caseStudies">CASE STUDIES</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#resume">RESUME</Nav.Link>
                                <Nav.Link href="#contact">GET IN TOUCH</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Row>

                </Container>
            </Navbar>



        </>
    )
};