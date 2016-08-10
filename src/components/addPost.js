import React, { Component } from 'react';
import createPost from '../actions/createPost'

export default class AddPost extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" placeholder="add post" />
          <button>Submit</button>
        </form>
      </div>
    )
  }

}
