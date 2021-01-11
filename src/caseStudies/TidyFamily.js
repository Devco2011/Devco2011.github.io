import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';
import { CSNavBar } from '../nav/CSNav';


export const TFCaseStudy = () => {
    return (
        <>
            <CSNavBar />
            <Container id="caseStudy-container" fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <h3 className="section-title">TESTING NEW KNOWLEDGE</h3>
                    </Col>

                </Row>

            </Container>
        </>

    )
}