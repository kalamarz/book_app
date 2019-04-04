import React from 'react';
import BooksList from '../books/BooksList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <button className='button button--add'>
        <Link to={`books/add`}>
          <FontAwesomeIcon className='icon' icon="plus-circle" />
          Add book
        </Link>
      </button>
      <BooksList />
    </div>
  )
}

export default Dashboard
