import React, { Component } from 'react';

export default class AuthorRow extends Component {
  render(){
    return(
      <p id={this.props.id} onClick={this.props.onClick}> {this.props.name} </p>
    )
  }
}
