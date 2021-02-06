import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';
import { LookModal } from './LookModal';
import { PlanModal } from './PlanModal';
import { CollabModal } from './CollabModal';
import { InclusivityModal } from './InclusivityModal';

export const Process = () => {
    return (
        <>
            <Container id="process-container">
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-8 mt-2">
                        <div className="knowledgeBox">
                            <h3 className="section-title">HOW I THINK ABOUT DESIGN</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-2">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanThumbsUpWhite.png" height="220em" width="85em" alt="Sickman looking through a telescope." />

                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 border-right">
                        <div className="about-div">
                            <h6 className="section-title-light">I love to design <u>and</u> I can code</h6>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I believe human-centered design is important work that has the potential to improve
                                lives. My understanding of front-end languages and frameworks enhances my ability to design for the user. I am driven by the desire to do work that makes a difference. </p>
                                <br></br> <hr></hr></ScrollAnimation>
                        </div>
                    </Col>

                    <Col className="col-12 col-md-4 ml-2">
                        <div className="about-div">
                            <h6 className="section-title-light">I am always learning</h6>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I love to consume information that I can put to work as a designer and developer. I am passionate about serving
                                the user, and that passion fuels my desire to constantly learn, expand my knowledge, and improve my craft. I will always be a student. </p>
                                <br></br><hr></hr></ScrollAnimation>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-1">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanBookWhite.png" height="220em" width="110em" alt="Sickman looking through a telescope." />

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-2">
                        <div className="images">
                            <img className="stickmanWhiteboard mt-5" src="../../images/stickmanSignWhite.png" height="225em" width="200em" alt="Sickman pointing to a whiteboard." />
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 border-right">
                        <div className="about-div">

                            <h6 className="section-title-light">Inclusivity</h6>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>Designing for inclusivity expands the reach of experiences and products to more people. That means more people
                                are able to participate in society and, therefore, society itself will better reflect the true diversity of our planet.</p>

                                <p>As a designer, I view it as a responsibility to represent that diversity in my work, by thinking beyond myself, empathizing, exploring, and expanding my own world view.</p>
                            </ScrollAnimation>
                        </div>
                    </Col>

                    <Col className="col-12 col-md-4 ml-2">
                        <div className="about-div">
                            <h6 className="section-title-light">Look, Listen, Learn</h6>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I strive to clearly define  solutions through constant communication with stakeholders, the design team,
                                and users. The first step is always to fully understand the problem that needs to be solved.</p>
                            </ScrollAnimation>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-1">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanTelescopeWhite.png" height="220em" width="135em" alt="Sickman looking through a telescope." />

                        </div>
                    </Col>
                </Row>

            </Container>
        </>

    )
}
