import { React } from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';



export const NavBar = (props) => {


    return (
        <>



            <Navbar className="navBarContainer" expand="lg" bg="dark" variant="light" fixed="top">

                <Container className="justify-content-center">
                    <Row className="justify-content-center">

                        <Navbar.Brand className="navBrand" href="/">DEVON COX</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto pl-3">
                                <HashLink className="nav-link" to="#about">ABOUT</HashLink>
                                <HashLink className="nav-link" to="#process-container">CREDO</HashLink>
                                <HashLink className="nav-link" to="#CaseStudies">WORK</HashLink>
                                <HashLink className="nav-link" to="#resume-container">RESUME</HashLink>
                                <Navbar.Text className="ml-5"><strong><a href="tel:615-310-7665" target="_blank" rel="noreferrer">615-310-7665</a> | <a href="mailto:devcoxdev@gmail.com" target="_blank" rel="noreferrer">devoncoxdev@gmail.com</a></strong></Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>

                    </Row>

                </Container>
            </Navbar>



        </>
    )
};