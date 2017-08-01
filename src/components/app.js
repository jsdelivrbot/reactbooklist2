import React, { Component } from 'react';
import BookList from './book_list';
import BookDetail from './book_detail';

const bookData = [
  { title: 'Emotional Intelligence',
    author: 'Travis Bradberry and Jean Greaves',
    keywords: 'emotions, awareness, adapt',
    description: "In today's fast-paced world of competitive workplaces and turbulent economic conditions, each of us is searching for effective tools that can help us to manage, adapt, and strike out ahead of the pack. By now, emotional intelligence (EQ) needs little introduction—it's no secret that EQ is critical to your success. But knowing what EQ is and knowing how to use it to improve your life are two very different things.Emotional Intelligence 2.0 delivers a step-by-step program for increasing your EQ via four, core EQ skills that enable you to achieve your fullest potential: Self-Awareness, Self-Management, Social Awareness, Relationship Management"
    },
    { title: 'The Phoenix Project',
    author: 'Gene Kim, Kevin Behr, and George Spafford',
    keywords: 'IT, philosophy, improvement',
    description: "They'll never view IT the same way again."
    },
    { title: 'Clean Code',
    author: 'Robert C. Martin',
    keywords: 'programming, patterns, practices',
    description: "Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code—of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.s"
    },
    { title: 'The Clean Coder',
    author: 'Robert C. Martin',
    keywords: 'craftmanship, discipline, techniques',
    description: "Great software is something to marvel at: powerful, elegant, functional, a pleasure to work with as both a developer and as a user. Great software isn’t written by machines. It is written by professionals with an unshakable commitment to craftsmanship. The Clean Coder will help you become one of them–and earn the pride and fulfillment that they alone possess."
    }
];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: bookData,
      selectedBook: bookData[0]
    };

    this.selectBook = this.selectBook.bind(this);

  }

  selectBook(book) {
    this.setState({
      books: bookData,
      selectedBook: book
    });
  }

  render() {
    return (
      <div className="book-app">
        <BookList books={this.state.books} />
        <BookDetail book={this.state.selectedBook} />
      </div>
    );
  }
}
