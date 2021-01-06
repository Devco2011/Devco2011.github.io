import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col, Link } from 'react-bootstrap';

export const ScrollLine = () => {
    return (
        <>
            <center><ScrollAnimation animateIn="animate__animated animate__backInLeft"><hr></hr></ScrollAnimation></center>
        </>
    )
}