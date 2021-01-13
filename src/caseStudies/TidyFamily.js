import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';
import { CSNavBar } from '../nav/CSNav';


export const TFCaseStudy = () => {
    return (
        <>
            <Container id="caseStudy-container" fluid={true}>
                <Row className="justify-content-md-center">
                    <Col className="col-12">
                        <h3 className="section-title">TESTING NEW KNOWLEDGE</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-6 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><p className="whatILearnedText"><strong>Three months into my bootcamp at Nashville Software School, I was given an assignment to build my
                                first React app from the ground up, and I had just two weeks to reach MVP.</strong></p><br></br>
                                <p className="whatILearnedText"><strong>The primary goal of this project was to assess my proficiency with my new skills in JavaScript, React, JSON, HTML, and CSS.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 col-md-8 mt-4 mb-5">
                        <div className="csImages">
                            <img className="tidyFamHomeCS" src="../../images/FamHome.jpg" height="100%" width="100%" alt="Homepage view of Tidy Family web app." />
                        </div>
                    </Col>
                    <Col md={6} className="mt-5 mb-5">
                        <h5 className="section-title">FRAMING THE CHALLENGE</h5>
                        <h6 className="mb-4">American parents spend an average of 23 hours and 36 munutes on housework per month.</h6>
                        <p>What if parents could get more help with housework from their kids? Motivating children to do
                        household chores isn't easy. Chores aren't fun. Parents need an easy way to make them fun. Which begs the question:
                          <strong> How might we make managing household chores easy for parents and fun for kids?</strong>
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col md={6} className="mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I defined the problem and researched solutions and constraints.</strong></p><br></br>
                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>The <i>perceived</i> problem may only be a symptom of the <i>real</i> problem, and it takes a deep dive to make
                                that determination.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col md={6} className="mt-5 mb-5">
                        <h5 className="section-title">RESEARCH: INTERVIEWING THE EXPERTS</h5>
                        <p>This was a solo project and, given the time constraints, I relied on my wife and kids for user research. I conducted interviews and together we found some possible solutions.</p>
                        <li>Make it a game</li>
                        <li>Make it easy to add, edit, and delete chores</li>
                        <li>Reward each chore a child does</li>
                        <li>Get the whole family involved as a team</li>
                        <li>Reward the whole family and individuals</li>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-2">

                    {/* <div className="csPenPaperImages"> */}
                    <Col className="col-12 col-md-3 mr-4 pt-3">
                        <img className="registrationView" src="../../images/RegistrationView.jpg" height="100%" width="100%" alt="Pencil and paper drawing of Tidy Family app." />
                    </Col>


                    <Col className="col-12 col-md-3 mr-4 pt-3">
                        <img className="kidView" src="../../images/KidView2.jpg" height="100%" width="100%" alt="Pencil and paper drawing of Tidy Family app." />
                    </Col>


                    <Col className="col-12 col-md-3 mr-4 pt-3">
                        <img className="cardView" src="../../images/ChoreCard.jpg" height="100%" width="100%" alt="Pencil and paper drawing of Tidy Family app." />
                    </Col>
                    {/* </div> */}
                    <Col className="col-12 col-md-12 mt-2 pb-5">
                        <center><p><i>The first iteration of Tidy Family, after initial user interview.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-8 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I conducted user interviews and created the first wireframe for the project.</strong></p><br></br>
                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>The user lights the way. They are the pathway to new ideas and they will expose hidden dangers.
                                    The user is part of the design team.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col md={6} className="mt-5 mb-5">
                        <h5 className="section-title">PUTTING MARKER TO WHITEBOARD</h5>
                        <p>Before jumping on to Figma, I created a physical representation of the project on a whiteboard. This helped me quickly visualize where
                        ipmrovements could be made.
                        </p>
                    </Col>
                    <Col md={8} className="mb-5">
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/TFWhiteboard.jpg" alt="Whiteboard drawing of Tidy Family app." />
                        </div>
                        <center><p><i>Tidy Family, whiteboard edition.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col md={8} className="mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I began to think about user flow, as well as modules and components. I created a new visual representation of the project.</strong></p><br></br>
                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>Answers to design questions often lead to more questions and can cause a project to quickly grow beyond its original scope. A simpler
                                        approach might be the solution.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col md={6} className="mt-5 mb-5">
                        <h5 className="section-title">GETTING SERIOUS ABOUT FUN</h5>
                        <p>It was clear from user interviews that the app needed to be fun from the moment they log in. From the logo to the language, and the colors to the characters. I began to apply the concepts of simplicity and fun
                        as I moved on to Figma.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-2">
                    <Col className="col-12 col-md-4 mt-4">
                        <img className="figmaFar" src="../../images/figmaFar.jpg" height="100%" width="100%" alt="Figma wireframe of Tidy Family." />
                    </Col>
                    <Col className="col-12 col-md-4 mt-4">
                        <img className="figmaClose" src="../../images/figmaClose.jpg" height="100%" width="100%" alt="Figma wireframe of Tidy Family." />
                    </Col>
                    <Col className="col-12 col-md-12 mt-2 pb-5">
                        <center><p><i>Working in Figma.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col md={8} className="mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I created a new wireframe in Figma, based off of my whiteboard wireframe, taking user research into account. I mapped user flow for child users and parent admins.</strong></p><br></br>
                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>Designing for multiple user sets, in this case parents and children, was an exciting challenge. It's important to find and get anchored in the place where all users' needs intersect.</strong></p></div>
                        </div>
                    </Col>
                </Row>


            </Container>
        </>

    )
}