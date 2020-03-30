import React from 'react'
import BooksyButtons from './BooksyButtons'
import { Table } from 'react-bootstrap'

function BooksyTable() {
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Check</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>Ocena</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th><BooksyButtons/></th>
                </tbody>

            </Table>
        </div>

    )
}

export default BooksyTable;