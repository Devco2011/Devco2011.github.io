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

                    <Col className="col-12 col-md-6">
                        <div className="about-div">
                            <center><h5 className="section-title">I love to solve problems and deliver beyond what is expected, and I'm a...</h5></center>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-2">
                    <Col className="col-12 col-md-4">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanGuitar.png" height="230rem" width="100rem" alt="Stickman playing guitar." />
                        </div>
                        <div className="about-div">
                            <h6 className="about-section-title">Singer, writer, player, and performer</h6>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanFamily.png" height="230rem" width="250rem" alt="Stickman with his family." />
                        </div>
                        <div className="about-div">
                            <h6 className="about-section-title">Husband and father</h6>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanBookWhite.png" height="230rem" width="100rem" alt="Stickman reading a book." />
                        </div>
                        <div className="about-div">
                            <h6 className="about-section-title">Lifelong learner and explorer</h6>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-4">
                    <Col className="col-12 col-md-6">
                        <div className="about-div">
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p class="lightBlue">I am also a nature lover, wannabe gardener, history buff, vegan, with an uncontrollable fear of heights and bugs. I love a good IPA.</p>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pb-5">
                    <Col className="col-10"> <div className="jumpTo">
                        <p>Jump to <HashLink to="#CaseStudies">my work</HashLink> if you'd like.</p></div>
                    </Col>
                </Row>


            </Container>
        </>

    )
}

