import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';



export const Work = () => {
    return (
        <>
            <div id="CaseStudies"></div>
            <Container id="light-blue-container" fluid>
                <Row className="justify-content-md-center">
                    <Col className="col-12-md-6 mt-5 mb-3">
                        <h3 className="section-title">MY WORK</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-5 mb-5">
                        <div className="images mt-4">
                            <Link to="/CaseStudies/TidyFamily" target="_blank"><img className="tidyFamHome" src="../../images/FamHome.jpg" height="100%" width="100%" alt="Homepage view of Tidy Family web app." /></Link>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5">
                        <h5 className="section-title mt-4">Tidy Family: A Project of Firsts</h5>
                        <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p><li>My first react app</li>
                            <li>My first user research</li>
                            <li>My first user interviews</li>
                            <li>My first solo project</li>
                            <li>My first case study</li>
                        </p></ScrollAnimation>
                        <p><Link to="/CaseStudies/TidyFamily" target="_blank"><strong>View the case study</strong></Link></p>

                    </Col>
                </Row>

            </Container>
        </>

    )
}