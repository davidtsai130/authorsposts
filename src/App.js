import React, { Component } from 'react';
import './App.css';
import AddAuthorsContainer from './containers/addAuthorsContainer'
import ListAuthorsContainer from './containers/listAuthorsContainer'
import AddPostsContainer from './containers/addPostsContainer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {current_author: ''}

  }
  handleOnClick(event) {
    this.setState({current_author: event.target.id})
  debugger

  }
  render() {
    return (
      <div className="App">
        <AddAuthorsContainer />
        <ListAuthorsContainer onClick={this.handleOnClick.bind(this)} />
        <AddPostsContainer authorId={this.props.authorId} />
      </div>
    );
  }
}

export default App;
