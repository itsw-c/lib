import React from 'react';
import BookItem from './BookItem';
import './BookList.css';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
