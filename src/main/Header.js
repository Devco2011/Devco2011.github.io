import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

export const Header = () => {
    return (
        <>
            <Container id="header-div" >
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <Row className="justify-content-md-center">
                            <h1>DEVON COX</h1>
                        </Row>
                    </Col>
                    <Row className="justify-content-md-center">
                        <Col>
                            <h4>UI/UX Designer + Front-End Developer</h4>
                        </Col>
                    </Row>

                </Row>
            </Container>
        </>

    )
}