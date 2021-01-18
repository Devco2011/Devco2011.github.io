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
                        <h3 className="section-title">ABOUT ME</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-3">
                        <div className="images">
                            <img className="stickmanThumbsUp mt-5" src="../../images/StickmanThumbsUp.png" height="200em" width="100em" alt="Sickman giving a thumbs up!" />
                        </div>
                    </Col>

                    <Col className="col-12 col-md-5">
                        <div className="about-div">
                            <h5 className="section-title">I love solving problems through design and code.</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I believe <strong>human-centered</strong> design is important work that has the potential to improve lives.
                        My understanding of front-end languages enhances my ability to design for the user. I am driven by the desire to do work that makes a difference.</p></ScrollAnimation>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 col-md-3">
                        <div className="images">
                            <img className="stickmanBook mt-5" src="../../images/stickmanBook.png" height="210em" width="100em" alt="Sickman reading a book." />
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5">
                        <div className="about-div">
                            <h5 className="section-title">I am always learning.</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I love to consume information that I can put to work
                            as a designer and developer. I am passionate about serving the <strong>user</strong>, and that passion fuels my
                            desire to constantly learn, expand my knowledge, and improve my craft. I will always be a student.
                            </p></ScrollAnimation>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-4">
                    <Col className="col-10" className="jumpTo">
                        <p>Jump to <HashLink to="#CaseStudies">case studies</HashLink> if you'd like.</p>
                    </Col>
                </Row>


            </Container>
        </>

    )
}

