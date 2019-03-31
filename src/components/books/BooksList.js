import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BooksList extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/books/')
      .then(res => {
        this.setState({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  }

  onDeleteClick = ( bookId) => { 

  }

  render() {
    const { books } = this.state;

    if(!books) return <p className='loading'>Loading...</p>;
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
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td>{book.isbn}</td>
              <td><button className='button button--edit'><Link to={`/edit/${book._id}`}>Edit</Link></button></td>
              <td><button className='button button--delete' onClick={ () => this.onDeleteClick(book.id)}>Delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>
    </div>
    )
  }
}

export default BooksList