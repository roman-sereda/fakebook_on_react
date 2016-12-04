import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';

import PostForm from '../views/posts/form'
import UsersPosts from '../views/posts/posts'

import * as postApi from '../../api/post-api';
import * as userApi from '../../api/user-api';

const PostsContainer = React.createClass({

  componentDidMount: function() {
    postApi.getPosts(this.props.user.id);
  },

  onSubmit: function(event){
    event.preventDefault();

    let post = {};
    post.body = this.refs.child.getBody();
    post.title = this.refs.child.getTitle();
    post.user_id = this.props.user.id;

    postApi.sendPost(post, this.props.user.id);
    postApi.getPosts(this.props.user.id);
  },

  render: function() {
    return (
      <div>
        <PostForm onSubmit={this.onSubmit} ref="child" />
        <UsersPosts posts={this.props.postList} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    postList: store.postState.posts
  };
};

export default connect(mapStateToProps)(PostsContainer);
