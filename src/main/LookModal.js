import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export const LookModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a onClick={handleShow}>
                example
        </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">REMOTE RESEARCH THROUGH SURVEYS</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

