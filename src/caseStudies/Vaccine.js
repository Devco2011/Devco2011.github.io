import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';



export const VaccineCaseStudy = () => {
    return (
        <>
            <div id="top"></div>
            <Container id="caseStudy-container" fluid={true}>
                <Row className="justify-content-md-center">
                    <Col className="col-12">
                        <h5 className="section-title-light">PROJECT: TN.GOV REDESIGN</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-5 mt-4">
                        <div>
                            <div>
                                <h6 className="section-title-light">OVERVIEW</h6>
                                <p>I worked as part of a remote team to improve the user experience for the TN.gov website. The main purpose was to practice conducting user tests and UX design. Remote user testing was conducted via Zoom and Figma was used to design and prototype.</p><br></br>
                            </div>
                            <h6 className="section-title-light">FRAMING THE CHALLENGE</h6>
                            <p>COVID 19 vaccines were just beginning to be rolled out, and scheduling a vaccine appointment on the TN.gov website was confusing and frustrating. We were divided into two teams of four and each team was tasked with improving the user experience. We were given three days to complete the assignment and present our designs.</p>
                        </div>

                    </Col>
                    <Col className="col-12 col-md-5 mt-4 mb-5">
                        <div className="csImages">
                            <img className="tidyFamHomeCS" src="../../images/vaccineCS.png" height="420vh" width="100%" alt="Homepage view of Tidy Family web app." />
                        </div>
                    </Col>
                </Row>
                <Row id="light-blue-container" className="justify-content-md-center pt-5">
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div>
                            <div>
                                <h6 className="section-title-light">RESEARCH</h6>
                                <p className="lightBlue">The team approached the project by gaining an understanding of the exact challenges with the existing site. We began by testing the existing site ourselves and researching other states' websites.
                        </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div>
                            <div>
                                <h6 className="section-title-light">Initial User Testing</h6>
                                <p className="lightBlue">To validate and enhance our understanding of the current challenges, we conducted user tests. We used the information gained from the user tests to inform our ideas for design improvement.</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div>
                            <div>
                                <h6 className="section-title-light">ROLE AND RESPONSIBILITIES</h6>
                                <p className="lightBlue">I was a member of a four person team. My role was to schedule and facilitate remote user tests and provide input for the redesign. I participated in prototyping and presenting our design.
                        </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div>
                            <div>
                                <h6 className="section-title-light">CONSTRAINTS</h6>
                                <p className="lightBlue">The main constraint for the redesign was working with existing systems, both in the design system of the TN.gov website and the state government's system of vaccine phases.</p>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row className="justify-content-md-center mt-5 mb-3">
                    <Col className="col-12">
                        <h6 className="section-title-light">OUTCOME AND TAKEAWAYS</h6>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/theirNav.png" height="320vh" width="90%" alt="Original navbar dropdown" />
                        </div>

                    </Col>
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/ourNav.png" height="320vh" width="90%" alt="Our navbar dropdown" />
                        </div>

                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/theirCounty.png" height="320vh" width="90%" alt="Original county view" />
                        </div>

                    </Col>
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/ourCounty.png" height="320vh" width="90%" alt="Our county view" />
                        </div>

                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/originalPhases.png" height="320vh" width="90%" alt="Original phases chart" />
                        </div>

                    </Col>
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/ourPhases.png" height="320vh" width="90%" alt="Our phases chart" />
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 col-md-6 mt-2 mb-5">
                        <div>
                            <div>
                                <p>After completing our redesign, we conducted more user tests. We found that users could now get to the vaccine scheduling page in a matter of seconds, when before it took much longer or they never found it. </p><p>Overall, users found our redesign was much easier to navigate and understand, but the phases chart still needed to be clearer.</p>
                                <p>This was a fun and challenging project that utilized user testing, journey mapping, research, prototyping, and presenting.
                        </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}