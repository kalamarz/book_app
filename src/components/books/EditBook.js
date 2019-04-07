import React, { Component } from 'react';
import axios from 'axios';

class EditBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      genre: '',
      year: '',
      pages: '',
      isbn: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/books/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          author: res.data.author,
          genre: res.data.genre,
          year: res.data.year,
          pages: res.data.pages,
          isbn: res.data.isbn,
        });
      })
      .catch(err => console.log(err));
  }

  onSubmit = (e) => {
    e.preventDefault();

    const editedBook = {
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      year: this.state.year,
      pages: this.state.pages,
      isbn: this.state.isbn
    };
    axios.post('http://localhost:5000/books/edit/'+ this.props.match.params.id, editedBook)
      .then(res => console.log(res.data));

    this.props.history.push('/');
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  
  render() {
    const { title, author, genre, year, pages, isbn } = this.state;

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
    )
  }
}


export default EditBook;