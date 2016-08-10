import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createPost from '../actions/createPost'
import AddPost from '../components/addPost'


const AddPostsContainer = class extends Component {

  handleOnSubmit(event) {
    event.preventDefault()
    var newId = this.props.posts.length + 1
    var authorId = this.props.authorId
    this.props.createPost(authorId, newId, event.target.firstChild.value)
  }

  render() {
    return (
      <div>
        <AddPost onSubmit={this.handleOnSubmit.bind(this)}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createPost: createPost}, dispatch)
}

const smartAddPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AddPostsContainer)



export default smartAddPostsContainer;
