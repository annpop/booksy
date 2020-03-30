import React from 'react';
import { Button } from 'react-bootstrap'
import './BooksyBody.css'

function BooksyButtons(props) {
    return(
        <div className="tyKurwiuDzialaj">
            <Button variant="danger">Delete</Button>{' '}
            <Button variant="primary">Edit</Button>{' '}
            <Button variant="success">Add</Button>{' '}
        </div>
    )
}

export default BooksyButtons