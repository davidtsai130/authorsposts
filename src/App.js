import React, { Component } from 'react';
import './App.css';
import AddAuthorsContainer from './containers/addAuthorsContainer'
import ListAuthorsContainer from './containers/listAuthorsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddAuthorsContainer />
        <ListAuthorsContainer />
        <AddPostsContainer />
      </div>
    );
  }
}

export default App;
