import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/layout/Dashboard';
import AddBook from './components/books/AddBook';
import EditBook from './components/books/EditBook';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
              <Route exact path="/" component={Dashboard} />
              <Route path="/book/add" component={AddBook} />
              <Route path="/edit/:id" component={EditBook} />
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
