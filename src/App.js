import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/layout/Dashboard';
import AddBook from './components/books/AddBook';
import EditBook from './components/books/EditBook';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
        <Router>
          <div className='app'>
            <Navbar />
              <Route exact path="/" component={Dashboard} />
              <Route path="/books/add" component={AddBook} />
              <Route path="/edit/:id" component={EditBook} />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
