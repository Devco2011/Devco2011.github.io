import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';


export const Work = () => {
    return (
        <>
            <Container id="work-container" fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <h3 className="section-title">MY WORK</h3>
                    </Col>
                    <Col md={5}>
                        <div className="images">
                            <img className="tidyFamHome" src="../../images/FamHome.jpg" alt="Homepage view of Tidy Family web app." />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="work-div">
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><h6>Tidy Family: A Project of Firsts</h6></ScrollAnimation>
                            <li>My first react app</li>
                            <li>My first experience with user research</li>
                            <li>My first user interviews</li>
                            <li>My first solo project</li>
                            <li>My first case study</li>
                            <p><a href="#work"><u><strong>View the case study</strong></u></a></p>
                        </div>

                    </Col>
                </Row>

            </Container>
        </>

    )
}