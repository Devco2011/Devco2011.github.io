import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';



export const VaccineCaseStudy = () => {
    return (
        <>
            <Container id="caseStudy-container" fluid={true}>
                <Row className="justify-content-md-center">
                    <Col className="col-12">
                        <h3 className="section-title">SIGN ME UP</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-6 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><center><h5 className="section-title">THE ASSIGNMENT</h5></center>
                                <p className="whatILearnedText"><strong>After signing her mother up for an appointment to receive the Covid 19 vaccine on the TN.gov website, our instructor shared
                                    her experience with us. She said the process of scheduling an appointment on the website was confusing and frustrating.</strong></p><br></br>
                                <p className="whatILearnedText"><strong>Our assignment was to improve the experience for users trying to request an appointment for the vaccine at covid19.TN.gov. We
                                    were divided into 2 teams of 4 and were given 3 days to complete the assignment and present our designs.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 col-md-4 mt-4 mb-5">
                        <div className="csImages">
                            <img className="tidyFamHomeCS" src="../../images/vaccineBottle.png" height="100%" width="100%" alt="Vaccine Bottle icon with title Sign up for Vaccine" />
                        </div>
                    </Col>


                    <Col className="col-12 mt-5">
                        <center><h5 className="section-title">GETTING FAMILIAR WITH THE SITE</h5></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mt-2 mb-5">
                        <p>We began by exploring and discussing the existing website as a team. Our initial intent was to evaluate the experience of signing up and/or determining eligibility
                        for the vaccine. We found the site to be confusing for a few reasons. </p>
                        <li>There was no clear path for requesting a vaccine</li>
                        <li>Sign up links were buried</li>
                        <li>Users had to answer a lengthy questionnaire</li>
                        <li>Sign up form was on an external site and did not look official</li>
                        <li>Sign up form was redundant, forciing the user to re-enter information</li>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mt-5 mb-5">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I worked with my team to evaluate the user experience on the existing website. We found the site to be a convoluted
                                    system that was hard to follow and difficult to navigate.</strong></p><br></br>

                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>It was unnecessarily difficult for a user to sign up for a vaccine appointment.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-12 mt-5">
                        <h5 className="section-title">FRAMING THE CHALLENGE</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={6} className="mt-2 mb-5">
                        <p>With millions of Tennesseans being directed to covid19.TN.gov to request a vaccine appointment, it was important that the site be easy to understand and navigate.
                        My team and I articulated the challenge by asking: <strong>How might we make it easier to sign up to receive the Covid 19 vaccine?</strong>
                        </p>
                        <p>AS a team, we determined some possible solutions.</p>
                        <li>County vaccination page text should be clear and understandable</li>
                        <li>The “Phases” graphic should be redesigned</li>
                        <li>The form should be redesigned</li>
                        <li>Remove the eligibility questionnaire completely</li>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-2">

                    <Col className="col-12 col-md-3 pr-2 pt-3">
                        <img className="registrationView" src="../../images/RegistrationView.jpg" height="100%" width="100%" alt="Pencil and paper drawing of Tidy Family app." />
                    </Col>


                    <Col className="col-12 col-md-3 pr- pt-3">
                        <img className="kidView" src="../../images/KidView2.jpg" height="100%" width="100%" alt="Pencil and paper drawing of Tidy Family app." />
                    </Col>


                    <Col className="col-12 col-md-3 pt-3">
                        <img className="cardView" src="../../images/ChoreCard.jpg" height="100%" width="100%" alt="Pencil and paper drawing of Tidy Family app." />
                    </Col>
                    {/* </div> */}
                    <Col className="col-12 col-md-12 mt-2 pb-5">
                        <center><p><i>The first iteration of Tidy Family, after initial user interview.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col className="col-12 col-md-6 mt-4">
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
                    <Col className="col-12 mt-4">
                        <h5 className="section-title">PUTTING MARKER TO WHITEBOARD</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-2">
                        <p>Before jumping on to Figma, I created a physical representation of the project on a whiteboard. This helped me quickly visualize where
                        improvements could be made.
                        </p>
                    </Col>
                    <Col md={8}>
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/TFWhiteBoard.jpg" alt="Whiteboard drawing of Tidy Family app." />
                        </div>
                    </Col>
                    <Col className="col-12 mt-2 pb-5">
                        <center><p><i>Tidy Family, whiteboard edition.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col className="col-12 col-md-6 mt-4">
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
                    <Col className="col-12 mt-4">
                        <h5 className="section-title">GETTING SERIOUS ABOUT FUN</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-2">
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
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col className="col-12 col-md-6 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I created a new wireframe in Figma, based off of my whiteboard wireframe, taking user research into account. I mapped user flow for child users and parent admins.</strong></p><br></br>
                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>Designing for multiple user sets, in this case parents and children, was an exciting challenge. It's important to find and get anchored in the place where all users' needs intersect.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 mt-4">
                        <h5 className="section-title">BUILDING THE APPLICATION</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-5">
                        <p>I had spent the previous three months learning front-end development, and this was my putting-it-all-together moment.
                        </p>
                        <li>I created an ERD and built a JSON database</li>
                        <li>I wrote logic in JS and JSX</li>
                        <li>I used Sass to customize ReactStrap components</li>
                        <li>I strove to write clean code</li>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mt-2 pb-5">
                        <div className="csPenPaperImages">
                            <img className="tferd" src="../../images/tferd.png" height="100%" width="100%" alt="Tidy Family app ERD" />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mt-2">
                        <div className="csPenPaperImages">
                            <img className="tferd" src="../../images/Code1.jpg" height="100%" width="100%" alt="Tidy Family app code" />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mt-2 pb-5">
                        <p><i>As a new developer, it was exciting to use the filter, map, and reduce methods to find each family member's current points.</i></p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col className="col-12 col-md-6 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I built a React App that satisfied CRUD, reached MVP, and proved my competency with JavaScript, React JS, CSS, and HTML.</strong></p><br></br>
                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>Work on one thing at a time and one small step at a time. Save after each small step so when you break it, you're one small step away from fixing it.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 mt-4">
                        <h5 className="section-title">FINAL THOUGHTS</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-2">
                        <p>The primary goal of this project was to assess my front-end development abilities. Although the emphasis was not on research or design, I was able to do some research and user testing. The project was
                        an important first attempt at designing for the user and overcoming challenges in both design and build.
                        </p>
                    </Col>
                    <Col className="col-12 col-md-8 mt-2">
                        <div className="csPenPaperImages">
                            <iframe className="video" src="https://www.youtube.com/embed/Jn-1aFymtzY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                    <Col className="col-12 mt-2 pb-5">
                        <center><p><i>User is logged in as admin.</i></p></center>
                    </Col>
                    <Col md={8}>
                        <div className="csPenPaperImages">
                            <iframe className="video" src="https://www.youtube.com/embed/B6K3IWyQIEE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                    <Col className="col-12 mt-2 pb-5">
                        <center><p><i>User is logged in as child.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col className="col-12 col-md-8 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">THE LEARNING CONTINUES:</h6>
                                <p className="whatILearnedText"><strong>I recently critiqued the app against usability heuristics for user design. Here are some highlights:</strong></p><br></br>
                                <p className="whatILearnedText pb-3"><strong>Visibility of system status</strong>
                                    <li>There could be a site menu in the footer</li>
                                    <li>Better indications on each view</li>
                                    <li>Overall consistency could be improved</li></p>
                                <p className="whatILearnedText pb-3"><strong>User control and freedom</strong>
                                    <li>There should be a way to cancel/close forms</li>
                                    <li>Better way to return to previous view</li></p>
                                <p className="whatILearnedText pb-2"><strong>Consistency and standards</strong>
                                    <li>Navigation stretches convention</li>
                                    <li>"About" does not need to be on every view</li>
                                    <li>Logo needs to link to homepage</li></p>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Container>
        </>

    )
}