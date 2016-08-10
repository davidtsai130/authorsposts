import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthorRow from '../components/authorRow'

const ListAuthorsContainer = class extends Component {

  handleOnClick(event) {
    debugger
    var authorId = event.target.id
    this.selectAuthor
    //on click, changes state of current author to selected:true


  }
  
  render(){
    var authorList = this.props.authors.map((author) => {
          return <AuthorRow id={author.id} onClick={this.handleOnClick.bind(this)} name={author.name} />
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
