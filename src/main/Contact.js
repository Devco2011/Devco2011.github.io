import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa'

export const Contact = () => {
    return (
        <>
            <Container id="contact" fluid>
                <Row className="justify-content-md-center">
                    <Col className="col-12 mt-5">
                        <h3 className="section-title">GET IN TOUCH</h3>
                    </Col>
                    <Col className="footer-contact col-12 col-md-6">
                        <center><h5 className="section-title">I would love to connect with you.</h5></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="footer-contact col-12 col-md-1">
                        <h6>Phone:</h6>
                    </Col>
                    <Col className="footer-contact col-12 col-md-3">
                        <h6>615-310-7665</h6>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-5">
                    <Col className="footer-contact col-12 col-md-1">
                        <h6>Email:</h6>
                    </Col>
                    <Col className="footer-contact col-12 col-md-3">
                        <h6>devco2011@gmail.com</h6>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="jumpTo col-3 col-md-2">
                        <a href="http://www.linkedin.com/in/devonhcox" target="_blank"><FaLinkedin className="icon pb-4" /></a>
                    </Col>
                    <Col className="jumpTo col-3 col-md-2">
                        <a href="https://github.com/Devco2011" target="_blank"><FaGithub className="icon pb-4" /></a>
                    </Col>
                    <Col className="jumpTo col-3 col-md-2">
                        <a href="https://dribbble.com/DevCo" target="_blank"><FaDribbble className="icon pb-4" /></a>
                    </Col>
                </Row>
            </Container >
        </>

    )
}
