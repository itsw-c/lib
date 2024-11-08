import React from 'react';
import './BookItem.css';

function BookItem({ book }) {
  return (
    <div className="book-item">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
}

export default BookItem;
