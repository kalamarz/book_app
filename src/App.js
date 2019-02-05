import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BooksList from './components/books/BooksList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <BooksList />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
