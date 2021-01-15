import { React, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Modal } from 'react-bootstrap';

export const InclusivityModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <HashLink to="#work" onClick={handleShow}><strong>My thoughts on designing for inclusivity</strong></HashLink>


            <Modal show={show} onHide={handleClose} dialogClassName={"primaryModal"}>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">WHY INCLUSIVITY MATTERS TO ME</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody"><p>Obviously, designing for <strong>inclusivity</strong> expands the reach of experiences and products to <strong>more people</strong>. That means more people are able to participate in society, and, therefore,
                society itself will better reflect the true <strong>diversity</strong> of our planet.</p><p> As a designer, I view it as a <strong>responsibility</strong> to represent that diversity in my work,
                    by thinking beyond myself, empathizing, exploring, and expanding my own world view.</p>
                </Modal.Body>
            </Modal>
        </>
    );
}