import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import BooksyButtons from './BooksyButtons';
import BooksyTable from './BooksyTable'
import './BooksyBody.css'


function BooksyBody() {
    return(
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header >
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Books
            </Accordion.Toggle>
                <BooksyButtons className="tyKurwiuDzialaj" />      
                </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <BooksyTable />
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