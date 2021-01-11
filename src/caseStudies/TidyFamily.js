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
                <Row className="justify-content-md-center mt-5">
                    <Col md={8} className="mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><p className="whatILearnedText"><strong>Three months into my bootcamp at Nashville Software School, I was given an assignment to build my
                                first React app from the ground up, and I had just two weeks to reach MVP.</strong></p><br></br>
                                <p className="whatILearnedText"><strong>The primary goal of this project was to assess my proficiency with my new skills in JavaScript, React, JSON, HTML, and CSS.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col md={8} className="mt-4">
                        <div className="csImages">
                            <img className="tidyFamHomeCS" src="../../images/FamHome.jpg" alt="Homepage view of Tidy Family web app." />
                        </div>
                    </Col>
                    <Col md={8} className="mt-5">
                        <h5 className="section-title">FRAMING THE CHALLENGE</h5>
                    </Col>
                </Row>

            </Container>
        </>

    )
}