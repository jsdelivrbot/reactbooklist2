import React from 'react';

const BookDetail = (props) => {
  return (
    <div className="book-detail">
      <h3>{props.book.title}</h3>
      <p>{props.book.author}</p>
      <p>{props.book.keywords}</p>
      <p>{props.book.description}</p>
    </div>
  );
};

export default BookDetail;
