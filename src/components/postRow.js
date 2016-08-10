import React, { Component } from 'react';

export default class PostRow extends Component {
  render(){
    return(
      <p id={this.props.id}>{this.props.authorId} {this.props.text} </p>
    )
  }
}
