import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import InfiniteScroll from 'redux-infinite-scroll';
import PostForm from '../views/posts/form'
import UsersPosts from '../views/posts/posts'
import EndlessScroll from './endless-scroll-container'

import * as postApi from '../../api/post-api';
import * as userApi from '../../api/user-api';

const PostsContainer = React.createClass({

  componentWillReceiveProps: function(NextProps) {
    postApi.getPosts(NextProps.user );
  },

  onSubmit: function(event){
    event.preventDefault();

    let post = {};
    post.body = this.refs.child.getBody();
    post.title = this.refs.child.getTitle();
    post.user_id = this.props.user;

    postApi.sendPost(post, this.props.user);
    postApi.getPosts(this.props.user);
  },

  render: function() {
    return (
      <div>
        <PostForm onSubmit={this.onSubmit} ref="child" />
        <EndlessScroll posts={this.props.postList} user={this.props.user}/>
      </div>
    )
  }
});

const mapStateToProps = function(store) {
  return {
    postList: store.postState.posts
  };
};

export default connect(mapStateToProps)(PostsContainer);
