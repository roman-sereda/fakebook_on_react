import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../views/user-profile';
import PostForm from '../views/posts/post_form';
import * as userApi from '../../api/user-api';
import * as postApi from '../../api/post-api';

const UserProfileContainer = React.createClass({

  componentDidMount: function() {
    userApi.getProfile(2);
    postApi.getPosts(2);
  },

  onSubmit: function(event){
    event.preventDefault();

    let post = {};
    post.body = this.refs.child.getBody();
    post.title = this.refs.child.getTitle();
    post.user_id = 2;

    postApi.sendPost(post, 2);
    postApi.getPosts(2);
  },

  render: function() {
    return (
      <div>
        <UserProfile {...this.props.profile} posts={this.props.postList} />
        <PostForm onSubmit={this.onSubmit} ref="child" />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile,
    postList: store.postState.posts
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
