import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class EditBook extends Component {
  constructor(props){
    super(props);

    this.titleInput = React.createRef();
    this.authorInput = React.createRef();
    this.genreInput = React.createRef();
    this.yearInput = React.createRef();
    this.pagesInput = React.createRef();
    this.isbnInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { book, firestore, history } = this.props;

    const editedBook = {
      title: this.titleInput.current.value,
      author: this.authorInput.current.value,
      genre: this.genreInput.current.value,
      year: this.yearInput.current.value,
      pages: this.pagesInput.current.value,
      isbn: this.isbnInput.current.value
    }

    firestore.update({ collection: 'books', doc: book.id }, editedBook)
      .then(history.push('/'));
  }

  render() {
    const { book } = this.props

    if(!book) return <p className='loading'>Loading...</p>;
    return (
        <div className='form'>
          <form onSubmit={this.onSubmit}
            className='form__container'
            >
            <div className='form__group'>
              <label htmlFor='title'>Title</label>
              <input 
                type='text'
                name='title'
                defaultValue={book.title}
                ref={this.titleInput}
                required
              />
            </div>
            <div className='form__group'>
              <label htmlFor='author'>Author</label>
              <input 
                type='text'
                name='author'
                defaultValue={book.author}
                ref={this.authorInput}
                required
              />
            </div>
            <div className='form__group'>
              <label htmlFor='genre'>Genre</label>
              <input 
                type='text'
                name='genre'
                defaultValue={book.genre}
                ref={this.genreInput}
                required
              />
            </div>
            <div className='form__group'>
              <label htmlFor='year'>Year</label>
              <input 
                type='number'
                name='year'
                defaultValue={book.year}
                ref={this.yearInput}
                required
              />
            </div>
            <div className='form__group'>
              <label htmlFor='pages'>Pages</label>
              <input 
                type='number'
                name='pages'
                defaultValue={book.pages}
                ref={this.pagesInput}
                required
              />
            </div>
            <div className='form__group'>
              <label htmlFor='isbn'>ISBN</label>
              <input 
                type='number'
                name='isbn'
                defaultValue={book.isbn}
                ref={this.isbnInput}
                required
              />
            </div>
            <button className='button button--submit' type='submit'>Submit</button>
          </form>
        </div>  
    )
  }
}


export default compose(
    firestoreConnect(props => [
        { collection: 'books', storeAs: 'book', doc: props.match.params.id }
    ]),
    connect(({ firestore: { ordered }}, props) => ({
        book: ordered.book && ordered.book[0]
    }))
)(EditBook);