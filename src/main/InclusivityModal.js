import { React, useState } from 'react';
import { Modal, Nav } from 'react-bootstrap';

export const InclusivityModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Nav.Link onClick={handleShow}>Here's an expample in my work.</Nav.Link>


            <Modal show={show} onHide={handleClose} dialogClassName={"primaryModal"}>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">COHORT 43 WEBSITE</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody"><p>While designing our cohort website, my team and I conducted user testing with multiple users via Zoom, and I was the facilitator of one of those tests.</p>
                    <p>Ultimately, the feedback we received led to major changes and overall improvement of our design.</p>
                    <p><a href="https://nss-day-cohort-43.github.io/" target="_blank">
                        View the Cohort 43 website</a>
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}