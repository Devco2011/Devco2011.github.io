import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa';

export const Resume = () => {
    return (
        <>
            <Container id="process-container" fluid>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-8">
                        <div className="knowledgeBox">
                            <h3 className="section-title">RESUME</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Col className="col-12 col-md-4  border-right">
                        <div className="about-div">
                            <h5 className="section-title-light">ABOUT ME</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I am a motivated creative with 6 months of experience in
                            ux/ui design and frontend software development. Prior to
                            becoming a frontend software developer, I was a professional
                            musician. I am personable and an enthusiastic collaborator,
                            fueled by a passion for creating honest, inclusive, and
                            meaningful experiences for people. I embrace
                            experimentation and I have a growth mindset.</p>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>

                    <Col className="col-12 col-md-4  pl-4">
                        <div className="about-div">
                            <h5 className="section-title-light">SKILLS</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>User Research, User Testing, UX Design,
                            Experience Strategy, Interaction Design, Personas, User Interface Design, Journey Mapping, Usability Testing, HTML, JavaScript, Prototyping, Wireframing,
                                CSS, REACT JS, Sass, Git, GitHub, Json, Firebase</p>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-4 border-right">
                        <div className="about-div">
                            <h5 className="section-title-light">TECHNICAL EXPERIENCE</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><h6 className="section-title-light">Nashville Software School</h6>

                                <p>Apprentice<br></br>
                                August 2020 - February 2021</p>
                                <ul>
                                    <li>Intensive, full-time, six month front-end web development and UI/UX design bootcamp</li><br></br>
                                    <li>Worked individually and on remote teams in an Agile workflow environment</li><br></br>
                                    <li>Developed the skills and mindset that will enable me to continually learn new technologies</li><br></br>
                                    <li>100% Remote</li>
                                </ul>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 pl-4">
                        <div className="about-div">
                            <h5 className="section-title-light">PROJECTS</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn">
                                <p><strong>Tidy Family <FaGithub /></strong><br></br>
                                    <i>Front-end Captstone</i></p>
                                <ul>
                                    <li>Figma, JavaScript, HTML, CSS, JSON, React, ReactStrap, Git, GitHub</li>
                                </ul>
                                <p><strong>Zero <FaGithub /></strong><br></br>
                                    <i>UI/UX Captstone</i></p>
                                <ul>
                                    <li>Figma, JavaScript, HTML, CSS, JSON, React, ReactStrap, Git, GitHub, Firebase</li>
                                </ul>
                                <p><strong>TN.gov Redesign</strong><br></br>
                                    <i>Team Project</i></p>
                                <ul>
                                    <li>Figma, Remote User Testing, Journey Mapping, Prototyping, Presenting</li>
                                </ul>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-4 border-right">
                        <div className="about-div">
                            <h5 className="section-title-light">TECHNICAL EXPERIENCE</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><h6 className="section-title-light">Nashville Software School</h6>

                                <p>Apprentice<br></br>
                                August 2020 - February 2021</p>
                                <ul>
                                    <li>Intensive, full-time, six month front-end web development and UI/UX design bootcamp</li>
                                    <li>Worked individually and on remote teams in an Agile workflow environment</li>
                                    <li>Developed the skills and mindset that will enable me to continually learn new technologies</li>
                                </ul>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 pl-4">
                        <div className="about-div">
                            <h5 className="section-title-light">PROJECTS</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn">
                                <p><strong>Tidy Family <FaGithub /></strong><br></br>
                                    <i>Front-end Captstone</i></p>
                                <ul>
                                    <li>Figma, JavaScript, HTML, CSS, JSON, React, ReactStrap, Git, GitHub</li>
                                </ul>
                                <p><strong>Zero <FaGithub /></strong><br></br>
                                    <i>UI/UX Captstone</i></p>
                                <ul>
                                    <li>Figma, JavaScript, HTML, CSS, JSON, React, ReactStrap, Git, GitHub, Firebase</li>
                                </ul>
                                <p><strong>TN.gov Redesign</strong><br></br>
                                    <i>Team Project</i></p>
                                <ul>
                                    <li>Figma, Remote User Testing, Journey Mapping, Prototyping, Presenting</li>
                                </ul>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>

                </Row>

            </Container >
        </>

    )
}
