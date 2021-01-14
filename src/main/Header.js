import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

export const Header = () => {
    return (
        <>
            <Container id="header-div">
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-12">
                        <h1>DEVON COX</h1>
                        <h4>UI/UX Designer + Front-End Developer</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-8" className="tagLine">
                        <h4>Eager to learn. Excited to grow. Ready to work.</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-5">
                    <Col className="col-10" className="jumpTo">
                        <p>Jump to <a href="#work">case studies</a> if you'd like.</p>
                    </Col>
                </Row>
                <div id="about"></div>
            </Container>
        </>

    )
}