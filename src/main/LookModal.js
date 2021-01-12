import { React, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Modal } from 'react-bootstrap';
import { HashRouter } from 'react-router-dom';

export const LookModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <HashLink to="#work" onClick={handleShow}><strong>View an expample in my work</strong></HashLink>


            <Modal show={show} onHide={handleClose} dialogClassName={"primaryModal"}>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">REMOTE RESEARCH THROUGH SURVEYS</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody"><p>Before I began designing this portfolio website, my team and I used a Google survey to conduct user research.</p>
                    <p>The survey was distributed to the Nashville tech community and we recieved responses from designers, hiring managers, and recruiters, giving us valuable insight into our users' needs.</p>
                    <p>Combined with other research, this gave me the ability to construct user personas and initial mockups.</p></Modal.Body>
            </Modal>
        </>
    );
}

