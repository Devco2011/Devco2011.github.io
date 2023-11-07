import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Container, Col } from 'react-bootstrap';

export const Header = () => {
    return (
        <>
            <Container id="header-div">
                <Row className="justify-content-md-center mb-5">
                    <Col xs md="auto">
                        <h1>DEVON COX</h1>
                        <h4>Technology Professional</h4>
                    </Col>
                    <Col md="12">
                        <h4 className="tagLine">HTML | CSS | JavaScript  | Integrations | APIs | Data</h4>
                    </Col>
                    <Col className="jumpTo col-12">
                        <p>Jump to <HashLink to="#CaseStudies">my work</HashLink> if you'd like.</p>
                    </Col>
                </Row>
            </Container>
        </>

    )
}