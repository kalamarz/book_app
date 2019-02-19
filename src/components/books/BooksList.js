import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

class BooksList extends Component {

  onDeleteClick = ( bookId) => { 
   this.props.firestore.collection('books').doc(bookId).delete();
  }

  render() {
    const { books } = this.props;

    if(!books) return <p>Loading...</p>;
    return (
      <div className='list'>
        <table className='list__table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Pages</th>
              <th>ISBN</th>
              <th></th>
              <th></th>
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
              <td><Link to={`/edit/${book.id}`}>Edit</Link></td>
              <td><button onClick={ () => this.onDeleteClick(book.id)}>Delete</button></td>
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