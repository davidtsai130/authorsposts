import React, { Component } from 'react';
import AddAuthor from '../components/addAuthor'
import createAuthor from '../actions/createAuthor'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class addAuthorsContainer extends Component {

  handleOnSubmit(event) {
    event.preventDefault()
    var newId = this.props.authors.length + 1
    this.props.createAuthor(newId ,event.target.firstChild.value)
  }

  render() {
    return (
      <div>
       <AddAuthor onSubmit={this.handleOnSubmit.bind(this)}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    authors: state.authors
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createAuthor: createAuthor}, dispatch)
}

const smartAddAuthorsContainer = connect(mapStateToProps, mapDispatchToProps)(addAuthorsContainer)

export default smartAddAuthorsContainer
