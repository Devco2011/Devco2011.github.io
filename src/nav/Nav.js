import { React } from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';



export const NavBar = (props) => {


    return (
        <>



            <Navbar className="navBarContainer" expand="md" bg="dark" variant="light" fixed="top">

                <Container className="justify-content-center">
                    <Row className="justify-content-center">

                        <Navbar.Brand className="navBrand" href="/">DEVON COX</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <HashLink className="nav-link" to="#about">ABOUT</HashLink>
                                <HashLink className="nav-link" to="#CaseStudies">CASE STUDIES</HashLink>
                                <a className="nav-link" href="./files/Resume.pdf" target="_blank">RESUME</a>
                                <HashLink className="nav-link" to="#contact">GET IN TOUCH</HashLink>
                            </Nav>
                        </Navbar.Collapse>

                    </Row>

                </Container>
            </Navbar>



        </>
    )
};