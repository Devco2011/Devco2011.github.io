import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

export const Header = () => {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col sm={8}>
                        <div id="header-div">
                            <h1>DEVON COX</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )
}