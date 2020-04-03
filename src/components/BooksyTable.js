import React from 'react'
import { Table, Button } from 'react-bootstrap'
import './BooksyBody.css'

function BooksyTable() {
    const books = [
        {id: 1, title: 'Kocham Anię', author: 'Grzegorz', description: 'Jest najsuper i w ogóle! <3 Tak na serio' },
        {id: 3, title: 'Jak zdobyć dziewczynę i zatrzymać dziewczynę', author: 'Casanova', description: 'Wszystkie porady, tajniki, techniki, sztuczki' },
        {id: 4, title: 'Zrozumieć kobietę', author: '(nieznany)', description: 'Żart taki, nie da się tego zrobić' },
        {id: 2, title: 'Wichrowe wzgórza', author: 'Ktoś tam', description: 'Podobno dobre...' },
    
      ]
    const renderBooks = (book, index) => {
        
        return(
            <tr key={index}>
                <th><input type="checkbox"/></th>
                <th>{book.title}</th>
                <th>{book.author}</th>
                <th>{book.description}</th>
                <th>{book.rating}</th>
                <th></th>
                <th><Button variant="primary">Edit</Button></th>
                <th><Button variant="danger" >Delete</Button></th>
            </tr>
        )
    }
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(renderBooks)}
                </tbody>

            </Table>
        </div>

    )
}

export default BooksyTable;