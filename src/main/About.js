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
                            <center><h5 className="section-title">HOW CAN I HELP YOU?</h5></center>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p className="lightBlue p-3">When thinking about what would be relevant about my life to share with you here, I came
                            to the conclusion that it is all relevant. I won’t write my whole story here, but I would love to elaborate when we connect. My life
                                experience can be an asset to your organization, your team, and your users. </p></ScrollAnimation>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-3">
                    <Col className="col-12 col-md-3 p-4 border-right">
                        <div>
                            <h5 className="section-title">EMPATHY</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p className="lightBlue">I have looked at life from many different perspectives. I came to the field of technology after
                            ten years of being a full-time performing singer and songwriter. Before that, I owned a small residential construction business. I have four kids, one is
                                a cancer survivor. I’ve known struggle, success, and all points in between. </p><p className="lightBlue"><strong>When it comes to empathy, I have a deep well of experiences to draw from.
                                </strong></p></ScrollAnimation>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-4 col-lg-3 p-4 border-right">
                        <div>
                            <h5 className="section-title">COLLABORATION</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p className="lightBlue">Years of songwriting, recording, and performing have taught me the value of everyone in the room being
                            comfortable enough to put their worst idea on the table. In Nashville, it’s normal for songwriter splits to be equal, even if one writer didn’t write a single line
                                in the song. That writer’s presence in the room and participation in the process earns them an equal share. I believe in that philosophy.</p>

                                <p className="lightBlue"><strong>My experience at Nashville Software School taught me how to collaborate remotely. Our cohort was 100% remote, full-time, for six months.
                                </strong></p></ScrollAnimation>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 col-lg-3 p-4">
                        <div>
                            <h5 className="section-title">PURPOSE</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p className="lightBlue">The people I work with and the work itself are most important to me. I know what it’s like to hang, have
                                fun, and accomplish great things together. </p>

                                <p className="lightBlue"><strong>The best situation is one where the team is positive and supportive and the work is challenging and rewarding.
                                </strong></p></ScrollAnimation>
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

