import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { HashLink } from 'react-router-hash-link';
import { Row, Container, Col } from 'react-bootstrap';


export const About = () => {
    return (
        <>
            <Container id="light-blue-container" fluid>
                <div id="about"></div>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mt-2">
                        <div className="knowledgeBox">
                            <h3 className="section-title">ABOUT ME</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">

                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <center><h6 className="section-title">I love to code and design great experiences, and I'm a...</h6></center>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-2">
                    <Col className="col-12 col-md-4">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanGuitar.png" height="230rem" width="100rem" alt="Stickman giving a thumbs up." />
                        </div>
                        <div className="about-div">
                            <h6 className="about-section-title">Singer, writer, player, and performer</h6>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanFamily.png" height="230rem" width="250rem" alt="Stickman giving a thumbs up." />
                        </div>
                        <div className="about-div">
                            <h6 className="about-section-title">Husband and father</h6>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanBookWhite.png" height="230rem" width="100rem" alt="Stickman giving a thumbs up." />
                        </div>
                        <div className="about-div">
                            <h6 className="about-section-title">Lifelong learner and explorer</h6>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-4 pb-5">
                    <Col className="col-10" className="jumpTo">
                        <p>Jump to <HashLink to="#CaseStudies">case studies</HashLink> if you'd like.</p>
                    </Col>
                </Row>


            </Container>
        </>

    )
}

