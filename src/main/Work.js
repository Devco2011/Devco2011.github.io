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
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p class="lightBlue">For the past two and a half years, I have worked as an application developer and a integrations developer. I have played an important role on seven figure projects for some of the biggest companies in the world, helping them operate more efficiently. Because of non-disclosure agreements, I can't share specifics of those projects here, but highlights include: </p>
                                </ScrollAnimation>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-1 mt-2 pt-2 pb-1">
                     <Col className="col-12 col-md-5 mb-5 pr-4 p-3 border-right">
                     <h6 className="section-title mt-4">Web Application Developer</h6> 
                       
                        <div className="images mt-3">
                       
                            <ul>
                                <li className='mb-2' class="lightBlue"><p class="lightBlue">As certified OutSystems developer, I was part of a team that developed an application for a major telecom company. The application allows pole workers in the field to access and update pole information in real time. The app displays data, allows users to input data, and processes data to ensure it is properly displayed based on filters provided by the user. We accomplished this by creating database diagrams and developing an indepth understanding of the business. We built the application to UI/UX design specifications provided by our design team.  </p></li>
                                <li className='mb-2' class="lightBlue"><p class="lightBlue">I helped develop an application to streamline a business services organization's resource management. This application gives project managers access to resource availablity, location, rate, etc. It also provides executives insight into utilization. As part of the team that designed the application, I participated in UX research including interviews with stakeholders. </p></li>
                            </ul>
                        </div>
                        
                        <h6 className="section-title mt-4">DocuSign CLM Developer Capstone</h6>
                       <div className="images mt-3">
                            <img className="tidyFamHome" src="../../images/DocuSignWF2.png" height="322rem" width="100%" alt="Screenshot of Devon Cox DocuSign capstone" />
                        </div>
                        
                        <p>
                            <p className="lightBlue pt-2">I became a Certified DocuSign CLM Developer early in 2022. My capstone project covers an integration with Salesforce. Over the next 18 months, as I worked with clients, my workflows became much more complex and included custom integrations with various systems. View the presentation <a href="https://youtu.be/3rRcF0Ci-Tw">here</a>. </p>
                            <p className="lightBlue">Throughout this time, I also developed using other platforms and became a certified Jitterbit Developer. </p>
                        </p>

                    </Col>

                    <Col className="col-12 col-md-5 mb-5 pl-4 p-3">
                    <h6 className="section-title mt-4">Integrations Consultant/Developer</h6> 
                       
                       <div className="images mt-3">
                      
                           <ul>
                               <li className='mb-2' class="lightBlue"><p class="lightBlue">I worked on a team helping to automate and improve procurement processes for one of the world's largest snack companies, through an integration with their homegrown systems and DocuSign CLM. Acions in the source system trigger an API request, which kicks off workflows in DocuSign CLM. These workflows receive data from the source system via the API request, then validate and prepare that data for various uses within DocuSign CLM, including contracting and reporting. Status updates and other data are sent back to the source system via API requests. I also designed and developed CSV intake workflows, allowing the client to load large amounts of data into DocuSign CLM via SFTP or API, with automated processes including validation, file replacement, and scheduled archiving. I implemented automated error handling including logs, authentication and request retries, and emails to the appropriate parties.</p></li>
                                <li className='mb-2' class="lightBlue"><p class="lightBlue">Working on projects for the second largest communications company in the world, I developed integrations that improved efficiency in HR, procurement, and reporting. I built complex workflows in DocuSign CLM that communcate with various external systems via API. For example, if an employee is transfered to a new department, the source system sends an API request, with the employee data in the body, to DocuSign CLM, which kicks off a workflow. This workflow validates the data, sends status updates to back to the source system, determines if the employee has been transferred, newly hired, or terminated, among other things. Based on a number of conditionals, the workflow follows the appropriate path and the employee file is updated and moved to the correct root folder.</p></li>
                                <li className='mb-2' class="lightBlue"><p class="lightBlue">I developed integrations via API between systems such as Salesforce, NetSuite, PEGA, and others, for companies across a variety of industries using middleware including Jitterbit, Mulesoft, and Boomi. Often using scheduled requests to extract data from various sources, transforming the data and making a request to the target system to load that data.  </p></li>
                           </ul>
                       </div>

                    </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6">
                        <div className="about-div">
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"> <h6 className="section-title mt-2">Nashville Software School - 6 Month, Full Time, Intensive Coding Bootcamp</h6> 
                                </ScrollAnimation>
                        </div>
                    </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-3 mt-2 pt-2 pb-3">
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