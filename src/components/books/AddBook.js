import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

class AddBook extends Component {
    state = {
        title: '',
        author: '',
        genre: '',
        year: '',
        pages: '',
        isbn: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newBook = this.state;

        const { firestore, history } = this.props;

        firestore.add({ collection: 'books' }, newBook)
            .then(() => history.push('/'))
    }

  render() {
      const { title, author, genre, year, pages, isbn } = this.state;

    return (
      <div>
        <div>
          <Link to ='/'>Back</Link>
        </div>
          <div>
            <form onSubmit={this.onSubmit}>
              <div>
                <label htmlFor='title'>Title</label>
                <input 
                  type='text'
                  name='title'
                  value={title}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='author'>Author</label>
                <input 
                  type='text'
                  name='author'
                  value={author}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='genre'>Genre</label>
                <input 
                  type='text'
                  name='genre'
                  value={genre}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='year'>Year</label>
                <input 
                  type='number'
                  name='year'
                  value={year}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='pages'>Pages</label>
                <input 
                  type='number'
                  name='pages'
                  value={pages}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='isbn'>ISBN</label>
                <input 
                  type='number'
                  name='isbn'
                  value={isbn}
                  onChange={this.onChange}
                  required
                />
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>  
      </div>
    )
  }
}

AddBook.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(AddBook)