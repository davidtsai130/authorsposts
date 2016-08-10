import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostRow from '../components/postRow'

const ListPostsContainer = class extends Component {
  render(){
    var postsList = this.props.posts.map((post) => {
          return <PostRow authorId={post.authorId} id={post.id} text={post.text} />
        })
        debugger
    return(
      <div>
        {postsList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const SmartListPostsContainer = connect(mapStateToProps)(ListPostsContainer)

export default SmartListPostsContainer
