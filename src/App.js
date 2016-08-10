import React, { Component } from 'react';
import './App.css';
import AddAuthorsContainer from './containers/addAuthorsContainer'
import ListAuthorsContainer from './containers/listAuthorsContainer'
import AddPostsContainer from './containers/addPostsContainer'
import ListPostsContainer from './containers/listPostsContainer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {current_author: []}

  }
  handleOnClick(event) {
    this.setState({current_author: [] })
    this.setState({current_author: [event.target.id]})

  }

  showPosts () {
    return (
      <div>
        <AddPostsContainer authorId={this.state.current_author}/>
        <ListPostsContainer />
      </div>
    )
  }
  render() {

    return (
      <div className="App">
        <AddAuthorsContainer />
        <ListAuthorsContainer onClick={this.handleOnClick.bind(this)} />
        {this.state.current_author.length > 0 ? <div>{this.showPosts()}</div> : <div></div> }
      </div>
    );
  }
}

export default App;
