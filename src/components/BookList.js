import React from 'react';
import { Link } from 'react-router-dom';

const books = [
  { id: 1, title: 'Book One', summary: 'Summary of book one' },
  { id: 2, title: 'Book Two', summary: 'Summary of book two' },
  // Add more books as needed
];

const BookList = () => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back</Link>
    </div>
  );
};

export default BookList;
