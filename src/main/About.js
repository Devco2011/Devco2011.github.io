import React from 'react';
import { Row, Container, Col, Link } from 'react-bootstrap';

export const About = () => {
    return (
        <>
            <Container id="about-div" >
                <Row>
                    <Col md={6}>
                        <h4>I love solving problems through design.</h4>
                        <p>I believe <strong>human-centered</strong> design is important work that has the potential to improve lives.
                        I am driven by the desire to do work that makes a difference.</p>
                    </Col>
                </Row>
            </Container>
        </>

    )
}