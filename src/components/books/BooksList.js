import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class BooksList extends Component {

  render() {
    const { books } = this.props;

    if(!books) return <p>Loading...</p>;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Pages</th>
              <th>ISBN</th>
            </tr>
          </thead>
          <tbody>
            { books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td>{book.isbn}</td>
            </tr>
            ))}
          </tbody>
        </table>
    </div>
    )
  }
}

export default compose(
    firestoreConnect([{ collection: 'books' }]),
    connect((state, props) => ({
        books: state.firestore.ordered.books
    }))
)(BooksList)