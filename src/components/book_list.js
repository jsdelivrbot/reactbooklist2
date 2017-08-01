import React, { Component } from 'react';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book, i) => {
      return (
        <li
          key={i}
          onClick={function() {this.selectBook(book)}}>
          <h3>{book.title}</h3>
        </li>
      )
    });
  }


  render() {
      return (
        <ul className="book-list">
          {this.renderList()}
        </ul>
      );
    }
}

export default BookList;
