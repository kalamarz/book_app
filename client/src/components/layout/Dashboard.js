import React from 'react';
import BooksList from '../books/BooksList';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <NavLink className='button button--add' to={`books/add`} >
          <FontAwesomeIcon className='icon icon--add' icon="plus-circle" />
          Add book
        </NavLink>
      <BooksList />
    </div>
  )
}

export default Dashboard
