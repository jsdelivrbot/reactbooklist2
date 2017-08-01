import React from 'react';

const BookList = (props) => {

  const renderList = props.books.map((book) => {
    return
      <li>{book.title}</li>
  });

    return (
      <ul className="book-list">
        {renderList}
      </ul>
    );
};

export default BookList;
