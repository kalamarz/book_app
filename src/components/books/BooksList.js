import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Pagination from '../common/Pagination';
import { paginate } from '../../utils/paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BooksList extends Component {
  _isMounted = false;

  constructor(props){
    super(props);
    this.state = {
      books: [],
      pageSize: 5,
      currentPage: 1
    }
  }
  
  componentDidMount(){ 
    this._isMounted = true;
    axios.get('http://localhost:5000/books/')
      .then(res => {
        this.setState({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  componentDidUpdate(){
    axios.get('http://localhost:5000/books/')
    .then(res => {
      if(this._isMounted) {
        this.setState({
          books: res.data
        });
      }
    })
    .catch(err => console.log(err));
  }


  onDeleteClick = ( bookId) => { 
    axios.delete('http://localhost:5000/books/'+bookId)
      .then(res => {
        this.setState({
          books: this.state.books.filter(book => book._id !== res.data._id)
        })
      })
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  render() {
    const { books, pageSize, currentPage } = this.state;
    const booksList = paginate(books, currentPage, pageSize);
     
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
            { booksList.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td>{book.isbn}</td>
              <td>
                <NavLink className='button button--edit' to={`/edit/${book._id}`}>
                  <FontAwesomeIcon className='icon' icon='pencil-alt'/>
                  Edit
                </NavLink>
              </td>
              <td>
                <button 
                  className='button button--delete' 
                  onClick={ () => this.onDeleteClick(book._id)}>
                  <FontAwesomeIcon className='icon' icon='minus-circle'/>
                  Delete
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        <Pagination 
          booksCount={books.length} 
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
    </div>
    )
  }
}

export default BooksList;