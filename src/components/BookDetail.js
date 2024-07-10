import React from 'react';
import { useParams, Link } from 'react-router-dom';

const books = [
  { id: 1, title: 'Book One', summary: 'Summary of book one' },
  { id: 2, title: 'Book Two', summary: 'Summary of book two' },
  // Add more books as needed
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.summary}</p>
      <Link to="/books">Back</Link>
    </div>
  );
};

export default BookDetail;
