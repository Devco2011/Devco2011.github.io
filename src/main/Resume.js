import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

export const Resume = () => {
    return (
        <>
            <Container id="resume-container" fluid>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-8">
                        <div className="knowledgeBox">
                            <h3 className="section-title">RESUME</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <h5 className="section-title-light">ABOUT ME</h5>
                            <p>Motivated creative with proven technical aptitude. I have  experience as a web application developer and an integrations developer. I take pride in my work and I love to learn and grow both professionally and personally. 
</p>
                            <br></br>
                        </div>
                    </Col>

                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <h5 className="section-title-light">SKILLS</h5>
                            <p><strong>JavaScript | HTML | CSS | Sass | React JS | Vue JS | REST and SOAP APIs | Data Mapping | Systems Integrations | Web Development | Experience Strategy | Interaction Design | Personas | User Interface Design | Journey Mapping | Usability Testing | Prototyping | Wireframing |
                                Agile | Scrum | Remote | Figma | Adobe CC | JSON | XML | Firebase</strong></p>
                            <br></br>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <h5 className="section-title-light">TECHNICAL EXPERIENCE</h5>
                            <h6 className="section-title-light">Spaulding Ridge</h6>
                            <p>Integrations Consultant<br></br>
                                January 2022 - July 2023</p><br></br>
                            <p className="resume">Architect and develop systems integration solutions for enterprise level clients</p>
                            <ul>
                                <li>Design and develop solutions that automate manual processes and improve efficiency</li>
                                <li>Lead discovery sessions, train-the-trainer and user training sessions, participate in Scrum meetings</li>
                                <li>High attention to detail, field mapping, documentation</li>
                                <li>Constant and efficient communication with internal and external teams and stakeholders</li>
                                <li>Regularly learn and become proficient with new tools</li>
                                <li>Certified DocuSign CLM Developer, Jitterbit Certified Developer</li>
                            </ul>
                            <br></br>
                            <h6 className="section-title-light">Cloud Development Resources</h6>
                            <p>Consultant<br></br>
                                April 2021 - January 2022</p><br></br>
                            <p className="resume">Develop reactive web applications for clients across a variety of industries</p>
                            <ul>
                                <li>Collaborate with internal and external teams, attention to detail and timelines</li>
                                <li>Write clear unit test and code review documentation to ensure quality control and identify bugs</li>
                                <li>Foster creativity, collaboration, productivity and support within multiple simultaneous projects and teams</li>
                                <li>Certified OutSystems Mobile Specialist, Certified OutSystems Reactive Web Developer</li>
                            </ul>
                            <br></br>
                            <h6 className="section-title-light">Nashville Software School</h6>
                            <p>Software Developer<br></br>
                                August 2020 - February 2021</p><br></br>
                            <p className="resume">Studied front-end web development and UI/UX design in a hands-on, learn-by-doing environment.</p>
                            <ul>
                                <li>Developed dynamic SPAs using React in addition to modern ES6+ JavaScript</li>
                                <li>Learned frontend fundamentals such as HTML5, CSS6, Sass, JSON, modular code, reusable components, and database structure using ERDs and Firebase</li>
                                <li>Gained competency in UI/UX design fundamentals such as wire framing, prototyping, research, user testing, journey mapping, site mapping, and personas</li>
                                <li>Exposed to an Agile environment through frequent group projects including daily stand ups, planning, ticket assignments, and problem solving</li>
                            </ul>
                            <br></br>
                        </div>
                    </Col>
                </Row>
                
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <h5 className="section-title-light">OTHER EXPERIENCE</h5>
                            <h6 className="section-title-light">Producer, Performer, Songwriter, Session Musician</h6>

                            <p>Musician<br></br>
                                November 2001 - March 2020</p>
                            <p className="resume">Worked solo and with other musicians and music professionals to record and tour. Collaborated with songwriters, producers, engineers, and musicians.</p>
                            <ul>
                                <li>Produced and engineered records and demos using Protools, Logic, and other software</li>
                                <li>Designed album covers, websites, and merch using Adobe CC</li>
                                <li>Collaborated with many teams under time constraints to deliver finished product</li>
                            </ul>
                            <br></br>
                            <br></br>
                            <h6 className="section-title-light">MUSIC CITY ROLLIN' JAMBOREE</h6>
                            <p>Musician<br></br>
                                 July 2013 - March 2020</p>
                            <p className="resume">Member of a three person team that performed a 90 minute music and comedy show twice a day.</p>
                            <ul>
                                <li>Helped take them from a startup to one of the top 5 attractions in Nashville</li>
                                <li>After 3 nominations, won the Music City Hitmaker Award from the city of Nashville for outstanding customer service</li>
                                <li>Worked in a high pressure, fast paced environment in front of a live audience</li>
                            </ul>
                            <br></br>
                        </div>
                    </Col>
                    

                </Row>

            </Container >
        </>

    )
}
