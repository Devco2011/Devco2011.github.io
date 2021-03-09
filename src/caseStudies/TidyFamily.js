import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';



export const TFCaseStudy = () => {
    return (
        <>
            <div id="top"></div>
            <Container id="caseStudy-container" fluid={true}>
                <Row className="justify-content-md-center">
                    <Col className="col-12">
                        <h5 className="section-title-light">PROJECT: TIDY FAMILY</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-5 mt-4">
                        <div>
                            <div>
                                <h6 className="section-title-light">OVERVIEW</h6>
                                <p>I created Tidy Family to provide a solution for managing household chores for families. The main goal was to practice and showcase my front-end dev skills. The project was built using the React JS framework and utilized HTML, CSS, JavaScript, JSON server, and SCSS.</p><br></br>
                            </div>
                            <h6 className="section-title-light">FRAMING THE CHALLENGE</h6>
                            <p>American parents spend an average of 23 hours and 36 minutes on housework per month.
                            What if parents could get more help with housework from their kids? Motivating children to do
                            household chores isn't easy. Chores aren't fun. Parents need an easy way to make them fun. Which begs the question:
                          <strong> How might we make managing household chores easy for parents and fun for kids?</strong></p>
                        </div>

                    </Col>
                    <Col className="col-12 col-md-5 mt-4 mb-5">
                        <div className="csImages">
                            <img className="tidyFamHomeCS" src="../../images/FamHome.jpg" height="420vh" width="100%" alt="Homepage view of Tidy Family web app." />
                        </div>
                    </Col>
                </Row>
                <Row id="light-blue-container" className="justify-content-md-center pt-5">
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div className="csImages">
                            <img className="tidyFamHomeCS" src="../../images/TidyFamilyUser.jpg" height="420vh" width="100%" alt="Homepage view of Tidy Family web app." />
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div>
                            <div>
                                <h6 className="section-title-light">RESEARCH: USER INTERVIEWS</h6>
                                <p className="lightBlue">User interviews were coducted to determine the challenges for both kids and parents when it comes to getting household chores done. The users were involved in the brainstorming process for possible solutions. Together, we came up with some ideas to make the application fun for kids and easy for parents.
                        </p><br></br>
                                <h6 className="section-title-light">PERSONA</h6>
                                <p className="lightBlue">The focus was on busy parents needing more free time and less stress around managing household chores. Tidy Family parents are creative, involved parents who value spending quality time with family.
                        </p>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 col-md-10 mt-2 mb-5">
                        <div>
                            <div>
                                <h6 className="section-title-light">ROLE AND RESPONSIBILITIES</h6>
                                <p>Tidy Family was my first solo project, having spent the previous two months working on remote team projects. I was solely resposible for the idea, research, wireframing, designing, coding, ticketing, and testing. Although this was a solo project, it was framed in Agile development using the Scrum methodology. Daily standups were conducted with the instructor.
                        </p><br></br>
                                <h6 className="section-title-light">CONSTRAINTS</h6>
                                <p>Time was the main constraint for the application. I had a deadline of two weeks from idea to MVP, and only one week of React JS experience under my belt. It was exciting and challenging to build a web application from scratch in a new framework with limited time.
                        </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/TFWhiteBoard.jpg" height="320vh" width="100%" alt="Whiteboard drawing of Tidy Family app." />
                        </div>
                        <div>
                            <center><p><i>Tidy Family, whiteboard edition</i></p></center>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5 mt-2 mb-5">
                        <div className="csPenPaperImages">
                            <img className="tidyFamWhiteboard" src="../../images/figmaClose.jpg" height="320vh" width="100%" alt="Figma wireframe of Tidy Family." />
                        </div>
                        <div>
                            <center><p><i>Figma wireframe</i></p></center>
                        </div>
                    </Col>

                </Row>
                <Row id="light-blue-container" className="justify-content-md-center pt-3">
                    <Col className="col-12 col-md-5 mt-4">
                        <div>
                            <div>
                                <h6 className="section-title-light">Outcomes and Takeaways</h6>
                                <p>Over the course of two weeks, I built an application that gamifies household chores. Admins add chores with a points value. Admins add family prizes with a points value, and set the weekly family prize. When a family member marks a chore as completed, the points value for that chore is added to the family member's total points. When an individual's points total is high enough, they are allowed to spin the wheel of prizes. When the total points for all family members is equal to the points value of the weekly family prize, the family is awarded that prize. Admin users can add, edit, and delete prized, chores, and family members.</p><br></br>
                            </div>
                            <p>I advanced my understanding of JavaScript and React JS. I learned about using a component library with React, as well as Sass. I got practice creating an ERD and building a Json database. I gained more experience with Git and Github, as well as Agile and Scrum. </p>
                            <p>If I were to continue to work on the app, I would start with the following changes based on usability heuristics:</p>
                            <ul>
                                <li>Visibility of system status and overall consistency</li>
                                <li>User control and freedom- better forms control</li>
                                <li>More conventional navigation</li>
                            </ul>
                        </div>

                    </Col>
                    <Col className="col-12 col-md-5">
                        <div className="csPenPaperImages">
                            <iframe className="video" src="https://www.youtube.com/embed/Jn-1aFymtzY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <center><p><i>User is logged in as admin</i></p></center>
                        <div className="csPenPaperImages">
                            <iframe className="video" src="https://www.youtube.com/embed/B6K3IWyQIEE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <center><p><i>User is logged in as family member</i></p></center>
                    </Col>
                </Row>



            </Container>
        </>

    )
}