import React from 'react';
import BooksyBody from './components/BooksyBody'
import { Container } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="container">
        <h1>Books</h1>
        <p>"So many books, soo litle time"</p>
        <BooksyBody />
      </Container>
    </div>
  );
}

export default App;
