import { React } from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './navbar.scss';


export const CSNavBar = (props) => {


    return (
        <>



            <Navbar className="navBarContainer" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">

                <Container className="justify-content-center">
                    <Row className="justify-content-center">

                        <Navbar.Brand className="navBrand" href="/">DEVON COX</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="nav-link" href="/#about">ABOUT</Nav.Link>
                                <Nav.Link href="/#CaseStudies">CASE STUDIES</Nav.Link>
                                <Nav.Link href="/#resume">RESUME</Nav.Link>
                                <Nav.Link href="/#contact">GET IN TOUCH</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Row>

                </Container>
            </Navbar>



        </>
    )
};