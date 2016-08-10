import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthorRow from '../components/authorRow'

const ListAuthorsContainer = class extends Component {
  //
  // handleOnClick(event) {
  //   debugger
  //   var authorId = event.target.id
  //
  // }

  render(){
    var authorList = this.props.authors.map((author) => {
          return <AuthorRow id={author.id} onClick={this.props.onClick} name={author.name} />
        })
    return(
      <div>
        {authorList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authors: state.authors
  };
}

const SmartListAuthorsContainer = connect(mapStateToProps)(ListAuthorsContainer)

export default SmartListAuthorsContainer
