import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';



export const Work = () => {
    return (
        <>
            <div id="CaseStudies"></div>
            <Container id="work-container" fluid={true}>
                <Row className="justify-content-md-center">
                    <Col className="col-10">
                        <h3 className="section-title">CASE STUDIES</h3>
                    </Col>
                    <Col className="col-5">
                        <div className="images">
                            <a href="#work"><img className="tidyFamHome" src="../../images/FamHome.jpg" alt="Homepage view of Tidy Family web app." /></a>
                        </div>
                    </Col>
                    <Col className="col-5">
                        <div className="work-div">
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><h5 className="section-title">Tidy Family: A Project of Firsts</h5></ScrollAnimation>
                            <p><li>My first react app</li>
                                <li>My first experience with user research</li>
                                <li>My first user interviews</li>
                                <li>My first solo project</li>
                                <li>My first case study</li>
                            </p>
                            <p><Link to="/CaseStudies/TidyFamily" target="blank"><strong>View the case study</strong></Link></p>
                        </div>

                    </Col>
                </Row>

            </Container>
        </>

    )
}