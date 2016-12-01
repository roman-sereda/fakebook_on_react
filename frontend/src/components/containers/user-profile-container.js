import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../views/user-profile';
import PostForm from '../views/posts/post_form';
import AddFriend from '../views/friendship/add_friend';
import * as userApi from '../../api/user-api';
import * as postApi from '../../api/post-api';
import * as friendshipApi from '../../api/friendship-api';

const UserProfileContainer = React.createClass({

  componentDidMount: function() {
    userApi.getProfile(userId);
    postApi.getPosts(userId);
  },

  onSubmit: function(event){
    event.preventDefault();

    let post = {};
    post.body = this.refs.child.getBody();
    post.title = this.refs.child.getTitle();
    post.user_id = userId;

    postApi.sendPost(post, userId);
    postApi.getPosts(userId);
  },

  render: function() {
    return (
      <div>
        <UserProfile {...this.props.profile} posts={this.props.postList}  />
        <PostForm onSubmit={this.onSubmit} ref="child" />
        <AddFriend onSubmitFriend={this.onSubmitFriend} />
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
