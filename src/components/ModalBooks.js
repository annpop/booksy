import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalBook(props) {
    const { showModal, handleClose } = props

    return(
         <Modal show={showModal} >
            <Modal.Header >
                <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
)
}

export default ModalBook