import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../views/user-profile';
import * as userApi from '../../api/user-api';
import * as postApi from '../../api/post-api';

const UserProfileContainer = React.createClass({

  componentDidMount: function() {
    userApi.getProfile(2)
    userApi.getUsers()
    postApi.getPosts(2)
    console.log(this.props.users)
    console.log(this.props.posts)
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
    postList: store.postState.posts
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
