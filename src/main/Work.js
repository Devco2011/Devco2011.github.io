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
                    <Col className="col-12-md-6">
                        <h3 className="section-title pb-5">My Work</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-5">
                        <div className="images mt-3">
                            <Link to="/CaseStudies/TidyFamily" target="blank"><img className="tidyFamHome" src="../../images/FamHome.jpg" height="350em" width="390em" alt="Homepage view of Tidy Family web app." /></Link>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5">
                        <ScrollAnimation animateIn="animate__animated animate__fadeIn"><h5 className="section-title mt-2">Tidy Family: A Project of Firsts</h5></ScrollAnimation>
                        <p><li>My first react app</li>
                            <li>My first user research</li>
                            <li>My first user interviews</li>
                            <li>My first solo project</li>
                            <li>My first case study</li>
                        </p>
                        <p><Link to="/CaseStudies/TidyFamily" target="blank"><strong>View the case study</strong></Link></p>

                    </Col>
                </Row>

            </Container>
        </>

    )
}