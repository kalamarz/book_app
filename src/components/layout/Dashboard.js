import React from 'react';
import BooksList from '../books/BooksList';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <button className='button button--add'><Link to={`books/add`}>Add book</Link></button>
      <BooksList />
    </div>
  )
}

export default Dashboard
