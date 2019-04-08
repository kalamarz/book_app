import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

        axios.post('/api/books/add', newBook)
          .then(res => console.log(res.data));

        this.props.history.push('/');
    }

  render() {
      const { title, author, genre, year, pages, isbn } = this.state;

    return (
      <div className='form'>
        <NavLink className='button button--back' to ='/'>
          <FontAwesomeIcon className='icon icon--back' icon='long-arrow-alt-left'/>
          Back
        </NavLink>
          <div>
            <form onSubmit={this.onSubmit}
              className='form__container'
            >
              <div className='form__group'>
                <label htmlFor='title'>Title</label>
                <input 
                  type='text'
                  name='title'
                  value={title}
                  onChange={this.onChange}
                  className='form__input'
                  required
                />
              </div>
              <div className='form__group'>
                <label htmlFor='author'>Author</label>
                <input 
                  type='text'
                  name='author'
                  value={author}
                  onChange={this.onChange}
                  className='form__input'
                  required
                />
              </div>
              <div className='form__group'>
                <label htmlFor='genre'>Genre</label>
                <input 
                  type='text'
                  name='genre'
                  value={genre}
                  onChange={this.onChange}
                  className='form__input'
                  required
                />
              </div>
              <div className='form__group'>
                <label htmlFor='year'>Year</label>
                <input 
                  type='number'
                  name='year'
                  value={year}
                  onChange={this.onChange}
                  className='form__input'
                  required
                />
              </div>
              <div className='form__group'>
                <label htmlFor='pages'>Pages</label>
                <input 
                  type='number'
                  name='pages'
                  value={pages}
                  onChange={this.onChange}
                  className='form__input'
                  required
                />
              </div>
              <div className='form__group'>
                <label htmlFor='isbn'>ISBN</label>
                <input 
                  type='number'
                  name='isbn'
                  value={isbn}
                  onChange={this.onChange}
                  className='form__input'
                  required
                />
              </div>
              <button className='button button--submit' type='submit'>Submit</button>
            </form>
          </div>  
      </div>
    )
  }
}

export default AddBook