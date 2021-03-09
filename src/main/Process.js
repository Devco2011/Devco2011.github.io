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
                            <h3 className="section-title">CREDO</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-2">
                    <Col className="col-12 col-md-2">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanThumbsUpWhite.png" height="220em" width="85em" alt="Stickman giving a thumbs up." />

                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 border-right">
                        <div className="about-div">
                            <h6 className="section-title-light">Be Creative</h6>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>Nothing gives me more pleasure than creating, and I strive to do so in a way that makes a difference.</p>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 pl-4">
                        <div className="about-div">
                            <h6 className="section-title-light">Live with Empathy</h6>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I have looked at life from many different perspectives. When it comes to empathy, I have a deep well to draw from. </p>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>

                    <Col className="col-12 col-md-2">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanRoad.png" height="220rem" width="85rem" alt="Stickman reading a book." />

                        </div>
                    </Col>

                </Row>
                <hr></hr>
                <Row className="justify-content-md-center  mt-2">

                    <Col className="col-12 col-md-2">
                        <div className="images">
                            <img className="stickmanWhiteboard mt-5" src="../../images/stickmanTelescopeWhite.png" height="235rem" width="120rem" alt="Stickman holding a sign that says Access." />
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 border-right">
                        <div className="about-div">

                            <h6 className="section-title-light">Exploration</h6>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>The desire to constantly grow as a human drives my passion for exploration.</p>
                            </ScrollAnimation>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 pl-4">
                        <div className="about-div">
                            <h6 className="section-title-light">Purpose</h6>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>Purpose comes from positive, supportive collaborators and work that is challenging, rewarding, and impactful. </p>
                            </ScrollAnimation>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-2">
                        <div className="images">
                            <img className="stickmanTelescope mt-5" src="../../images/stickmanSign.png" height="240rem" width="110rem" alt="Stickman looking through a telescope." />

                        </div>
                    </Col>
                </Row>

            </Container>
        </>

    )
}
