import React from 'react';
import BooksList from '../books/BooksList';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to={`book/add`}>Add book</Link>
      <BooksList />
    </div>
  )
}

export default Dashboard
