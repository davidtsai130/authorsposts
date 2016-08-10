import React, { Component } from 'react';
import createAuthor from '../actions/createAuthor'

export default class addAuthor extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" placeholder="add author" />
          <button>Submit</button>
        </form>
      </div>
    )
  }

}
