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
                            <p>Motivated creative with proven technical aptitude. I have 2 years of experience as a business services consultant, architecting and developing data integration solutions for enterprise clients. I take pride in my work and, most of all, I love to learn and grow both professionally and personally. 
</p>
                            <br></br>
                        </div>
                    </Col>

                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <h5 className="section-title-light">SKILLS</h5>
                            <p><strong>JavaScript ES6 | HTML5 | CSS3 | Sass | React JS | Vue JS | REST API | User Research | User Testing | UX Design |
                            Experience Strategy | Interaction Design | Personas | User Interface Design | Journey Mapping | Usability Testing | Prototyping | Wireframing |
                                Agile | Scrum | Remote | Figma | Adobe CC | JSON | Firebase</strong></p>
                            <br></br>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <h5 className="section-title-light">TECHNICAL EXPERIENCE</h5>
                            <h6 className="section-title-light">Nashville Software School</h6>
                            <p>Software Developer<br></br>
                                August 2020 - February 2021</p><br></br>
                            <p className="resume">Studied front-end web development and UI/UX design in a hands-on, learn-by-doing environment.</p>
                            <ul>
                                <li>Developed dynamic SPAs using React in addition to modern ES6+ JavaScript</li>
                                <li>Learned frontend fundamentals such as HTML5, CSS6, Sass, JSON, modular code, reusable components, and database structure using ERDs and Firebase</li>
                                <li>Gained competency in UI/UX design fundamentals such as wire framing, prototyping research, user testing, journey mapping, site mapping, and personas</li>
                                <li>Exposed to an Agile environment through frequent group projects including daily stand ups, planning, ticket assignments, and problem solving</li>
                            </ul>
                            <br></br>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <h5 className="section-title-light">PROJECTS</h5>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-4 border-right">
                        <div className="about-div">
                            <p><strong>Tidy Family </strong><br></br>
                                    Front-end Captstone</p><br></br>
                            <p>Front-end capstone for Nashville Software School. Used LucidChart to create ERD. Used Figma to wireframe and mockup. Learned how to research and solve coding challenges, including JS and React, in an Agile environment with time constraints.</p>

                            <p>Figma | JavaScript | HTML | CSS | JSON | React | ReactStrap | Git | GitHub</p>

                        </div>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <div className="about-div">

                            <p><strong>C43 Class Website</strong><br></br>
                                    Team Project</p><br></br>
                            <p>Collaborated with team to build the class website. Led remote user tests. Used user feedback to find solutions and resolve design conflicts within the team. Built in React JS framework. Participated in creating and assigning tickets via Github.</p>

                            <p>JavaScript | HTML | CSS | JSON | React JS | Git | GitHub | User Testing</p>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="justify-content-md-center">

                    <Col className="col-12 col-md-4 border-right">
                        <div className="about-div">
                            <p><strong>Zero </strong><br></br>
                                    UI/UX Captstone</p><br></br>
                            <p>UI/UX capstone for Nashville Software School. React application to help Nashvillians reduce trash. Built an API and learned how to make fetch calls using Firebase methods. Used JS promise.all to return an array of promises and solved a complex join table challenge.</p>

                            <p>Figma, JavaScript, HTML, CSS, JSON, React, ReactStrap, Git, GitHub, Firebase</p>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <div className="about-div">

                            <p><strong>TN.gov Redesign</strong><br></br>
                                    Team Project</p><br></br>
                            <p>Team project. Conducted multiple remote user tests to inform design decisions. Conducted research and analysis. Collaborated with team members to create a prototype and present our design.</p>

                            <p>Figma | Remote User Testing | Journey Mapping | Prototyping | Presenting</p>

                            <br></br>
                        </div>
                    </Col>

                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <h5 className="section-title-light">PROFFESIONAL EXPERIENCE</h5>
                            <h6 className="section-title-light">DEVON HEATH MUSIC</h6>

                            <p>Musician<br></br>
                                November 2001 - March 2020</p>
                            <p className="resume">Worked solo and with other musicians and music professionals to record and tour. Collaborated with songwriters, producers, engineers, and musicians.</p>
                            <ul>
                                <li>Produced and engineered records and demos using Protools, Logic, and other software</li>
                                <li>Designed album covers, websites, and march using Adobe CC</li>
                                <li>Collaborated with many teams under time constraints to deliver finished product</li>
                            </ul>
                            <br></br>
                            <br></br>
                            <h6 className="section-title-light">MUSIC CITY ROLLIN' JAMBOREE</h6>
                            <p>Musician<br></br>
                                 July 2013 - March 2020</p>
                            <p className="resume">Part of a team that performed a 90 minute music and comedy show twice a day.</p>
                            <ul>
                                <li>Helped take them from a startup to one of the top 5 attractions in Nashville</li>
                                <li>After 3 nominations, won the Music City Hitmaker Award from the city of Nashville for outstanding customer service</li>
                                <li>Worked in a high pressure, fast paced environment in front of a live audience</li>
                            </ul>
                            <br></br>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <h5 className="section-title-light">EDUCATION</h5>
                            <h6 className="section-title-light">NASHVILLE SOFTWARE SCHOOL</h6>

                            <p>Front-end Designer/Developer Certificate<br></br></p>
                            <p className="resume">Full-time, 6 month web development bootcamp. Studied front-end web development and UI/UX design. Gained experience collaborating remotely in an Agile environment. Learned how to think like a developer and maintain a growth mindset.</p>
                            <br></br>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-8">
                        <div className="about-div">
                            <a className="link" href="./files/Devon-Cox.pdf" target="_blank">View/Download Resume PDF</a>
                        </div>
                    </Col>

                </Row>

            </Container >
        </>

    )
}
