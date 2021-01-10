import { React } from 'react'
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap'
import './navbar.scss'
export const NavBar = (props) => {


    return (
        <>



            <Navbar className="navBarContainer" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">

                <Container className="justify-content-center">
                    <Row className="justify-content-center">

                        <Navbar.Brand className="navBrand" href="#home">DEVON COX</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="nav-link" href="#about">ABOUT</Nav.Link>
                                <Nav.Link href="#caseStudies">CASE STUDIES</Nav.Link>
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