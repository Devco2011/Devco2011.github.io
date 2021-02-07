import React from 'react';
import { HashLink } from 'react-router-hash-link'
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col, Button } from 'react-bootstrap';



export const Work = () => {
    return (
        <>
            <div id="CaseStudies"></div>
            <Container id="light-blue-container" fluid>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-8 mt-5">
                        <div className="knowledgeBoxWork">
                            <h3 className="section-title">MY WORK</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-3 mb-5 pr-4 border-right">
                        <div className="images mt-3">
                            <HashLink to="/CaseStudies/Vaccine#top"><img className="vaccineCS" src="../../images/vaccineCS.png" height="100%" width="101%" alt="Homepage view of Tidy Family web app." /></HashLink>
                        </div>
                        <h6 className="section-title mt-4">State COVID-19 Vaccine Redesign</h6>
                        <ScrollAnimation animateIn="animate__animated animate__fadeIn">
                            <p className="lightBlue">This was a team project for Nashville Software School. We were asked to make it easier for users to sign up for the COVID-19 vaccine. We created a Figma prototype and used
                            remote user testing thoughout our process. </p>
                            <p className="lightBlue">Research | Wireframing | Prototyping | Journey Mapping | User Testing | Figma | User Flow | Collaboration</p></ScrollAnimation>
                        <p><HashLink to="/CaseStudies/Vaccine#top"><strong>View the case study</strong></HashLink></p>

                    </Col>
                    <Col className="col-12 col-md-3 mb-5 pl-4">
                        <div className="images mt-3">
                            <HashLink to="/CaseStudies/TidyFamily#top"><img className="tidyFamHome" src="../../images/FamHome.jpg" height="100%" width="100%" alt="Homepage view of Tidy Family web app." /></HashLink>
                        </div>
                        <h6 className="section-title mt-4">Tidy Family: Front-end Capstone</h6>
                        <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>
                            <p className="lightBlue">Tidy family was my front-end capstone at Nashville Software School. The purpose was to showcase my new development skills. It was a solo project and my first React app.</p>
                        </p>
                            <p className="lightBlue">React | Javascript | HTML | CSS | Sass | JSON | UX | Figma | Lucidchart | VS Code | Git | Github</p></ScrollAnimation>
                        <p><HashLink to="/CaseStudies/TidyFamily#top"><strong>View the case study</strong></HashLink></p>

                    </Col>
                </Row>

            </Container>
        </>

    )
}