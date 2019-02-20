import React from 'react';
import BooksList from '../books/BooksList';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <button className='button button--add'><Link to={`book/add`}>Add book</Link></button>
      <BooksList />
    </div>
  )
}

export default Dashboard
