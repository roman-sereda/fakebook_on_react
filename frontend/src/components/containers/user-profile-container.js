import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../views/user-profile';
import * as userApi from '../../api/user-api';
import * as postApi from '../../api/post-api';

const UserProfileContainer = React.createClass({

  componentDidMount: function() {
    let userId = this.props.params.userId
    userApi.getProfile(userId)
    userApi.getUsers()
    postApi.getPosts(userId)
  },

  render: function() {
    return (
      <UserProfile {...this.props.profile} users={this.props.userList} posts={this.props.postList} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile,
    userList: store.userState.users,
    postList: store.userState.posts
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
