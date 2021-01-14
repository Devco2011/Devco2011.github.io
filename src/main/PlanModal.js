import { React, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Modal, Nav } from 'react-bootstrap';

export const PlanModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <HashLink to="#work" onClick={handleShow}><strong>View an example in my work</strong></HashLink>


            <Modal show={show} onHide={handleClose} dialogClassName={"primaryModal"}>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">TIDY FAMILY WEB APP</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody"><p>Tidy family was my front-end capstone. I used visuals every step of the way.</p>
                    <li>Pencil and paper wireframe for first user interviews</li>
                    <li>Pencil and paper wireframe for V2, after initial interviews</li>
                    <li>Whiteboard wireframe for first user flow design</li>
                    <li> Figma mockup to solidify design elements</li>
                    <p><Nav.Link>
                        <u>View the full case study</u>
                    </Nav.Link></p>
                </Modal.Body>
            </Modal>
        </>
    );
}