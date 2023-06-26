import React from 'react';
import { HashLink } from 'react-router-hash-link'
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';



export const Work = () => {
    return (
        <>
            <div id="CaseStudies"></div>
            <Container id="light-blue-container" fluid>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-8 mb-4">
                        <div className="knowledgeBoxWork">
                            <h3 className="section-title">MY WORK</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-4">
                    <Col className="col-12 col-md-6">
                        <div className="about-div">
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p class="lightBlue">For the past two years I have worked as a business services consultant. I have played an important role on seven figure projects for some of the biggest companies in the world, helping to make those business run more efficiently. Becuase of non-disclosure agreements, I can't share specifics of those projects here. What follows are some of the projects I worked on as a student at Nashville Software School.</p>
                                <br></br></ScrollAnimation>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-3 mt-5 pt-5 pb-3">
                    <Col className="col-12 col-md-5 mb-5 pr-4 p-3 border-right">
                        <div className="images mt-3">
                            <img className="vaccineCS" src="../../images/C43.png" height="322rem" width="100%" alt="View of a design project." />
                        </div>
                        <h6 className="section-title mt-4">C43 Class Website</h6>

                        <p className="lightBlue">Collaborated with team to build the class website. Led remote user tests. Used user feedback to find solutions and resolve design conflicts within the team. Built with React JS framework. Participated in creating and assigning tickets via Github.</p>

                        <a className="nav-link" href="https://nss-day-cohort-43.github.io/"><strong>View the website</strong></a>

                    </Col>

                    <Col className="col-12 col-md-5 mb-5 pl-4 p-3">
                        <div className="images mt-3">
                            <HashLink to="/CaseStudies/TidyFamily#top"><img className="tidyFamHome" src="../../images/FamHome.jpg" height="322rem" width="100%" alt="Homepage view of Tidy Family web app." /></HashLink>
                        </div>
                        <h6 className="section-title mt-4">Tidy Family: Front-end Capstone</h6>
                        <p>
                            <p className="lightBlue">Tidy family was my front-end capstone at Nashville Software School. The purpose was to showcase my new development skills. It was a solo project and my first React app.</p>
                        </p>

                        <p><HashLink to="/CaseStudies/TidyFamily#top"><strong>View the case study</strong></HashLink></p>

                    </Col>
                    <Col className="col-12 col-md-5 mb-5 pr-4 p-3 border-right">
                        <div className="images mt-3">
                            <HashLink to="/CaseStudies/Vaccine#top"><img className="vaccineCS" src="../../images/vaccineCS.png" height="354rem" width="101%" alt="View of a design project." /></HashLink>
                        </div>
                        <h6 className="section-title mt-3">State COVID-19 Vaccine Redesign</h6>

                        <p className="lightBlue">This was a team project for Nashville Software School. We were asked to make it easier for users to sign up for the COVID-19 vaccine.</p>

                        <p><HashLink to="/CaseStudies/Vaccine#top"><strong>View the case study</strong></HashLink></p>

                    </Col>
                    <Col className="col-12 col-md-5 mb-4 pl-4 p-3">
                        <div className="images mt-3">
                            <img className="tidyFamHome" src="../../images/vue-scoreboard.png" height="352rem" width="100%" alt="View of Horeshoes Scoreboard." />
                        </div>
                        <h6 className="section-title mt-3">Horseshoes Scoreboard</h6>
                        <p>
                            <p className="lightBlue">Scoreboard built using Vue JS. When a user clicks "Closest", one point is added to that player's score. When "Ringer" is clicked, three points are added. The game status is updated, showing the leader and how many points that player is ahead. The leading player is highlighted in the heading. </p>
                        </p>

                        <p><a className="nav-link" href="https://horseshoes-scoreboard.web.app/"><strong>View the application</strong></a></p>

                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-3 pb-3">
                    <Col className="col-12 col-md-5 mb-5 pr-4 p-3">
                        <div className="images mt-3">
                            <a href="https://trivia-starwars.web.app/"><img className="vaccineCS" src="../../images/twTrivia.png" height="322rem" width="100%" alt="View of a design project." /></a>
                        </div>
                        <h6 className="section-title mt-3">Star Wars Trivia</h6>
                        <p>
                            <p className="lightBlue">Trivia game built using Vue js. User can choose the level of difficulty or view all questions. When "Show Answer" is clicked, the card flips and the answer is shown.  </p>
                        </p>

                        <p><a className="nav-link" href="https://trivia-starwars.web.app/"><strong>View the application</strong></a></p>

                    </Col>
                </Row>
            </Container>
        </>

    )
}