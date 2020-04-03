import React, { useState } from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import BooksyTable from './BooksyTable'
import ModalBooks from './ModalBooks'
import './BooksyBody.css'


function BooksyBody(books) {
  
  const [ showModal, setModal ] = useState(false)
  const handleShow = () => setModal(true);
  const handleClose = () => setModal(false);
    return(
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header >
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Books
            </Accordion.Toggle>
              <div className="tyKurwiuDzialaj">
                <Button variant="success" onClick={handleShow}>Add</Button>{' '}
                <Button variant="primary">Edit</Button>{' '}
                <Button variant="danger">Delete</Button>{' '}
              </div>   
                </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <BooksyTable />
                    <ModalBooks showModal={showModal} handleClose={handleClose}/>
                </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )
}

export default BooksyBody;