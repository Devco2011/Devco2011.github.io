import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col, Link } from 'react-bootstrap';


export const About = () => {
    return (
        <>
            <Container id="about-container" >
                <center><ScrollAnimation animateIn="animate__animated animate__backInLeft"><hr></hr></ScrollAnimation></center>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <img className="stickmanThumbsUp" src="../../images/StickmanThumbsUp.png" alt="Sickman giving a thumbs up!" />
                    </Col>
                    <Col md={6}>
                        <div className="about-div">
                            <h4>I love solving problems through design.</h4>
                            <p>I believe <strong>human-centered</strong> design is important work that has the potential to improve lives.
                        I am driven by the desire to do work that makes a difference.</p>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <img className="stickmanBook" src="../../images/stickmanBook.png" alt="Sickman giving a thumbs up!" />
                    </Col>
                    <Col md={6}>
                        <div className="about-div">
                            <h4>I am always a student.</h4>
                            <p>I am currently a student at Nashville Software School. I will graduate in February of 2021, but I will
                            continue to grow as a designer long after. I am passionate about my work, and that passion fuels my
                            desire to constantly learn, expand my knowledge, and improve my craft. I will always be a student.
                            </p>
                        </div>
                    </Col>
                    <Col md={10} className="jumpTo2">
                        <p>Jump to <a href="#work">case studies</a> if you'd like.</p>
                    </Col>
                </Row>
                <center><ScrollAnimation animateIn="animate__animated animate__backInRight"><hr></hr></ScrollAnimation></center>
            </Container>
        </>

    )
}

