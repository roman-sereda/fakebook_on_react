import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../views/user-profile';
import * as userApi from '../../api/user-api';

const UserProfileContainer = React.createClass({

  componentDidMount: function() {
    userApi.getProfile(2);
    userApi.getUsers();
  },

  render: function() {
    return (
      <UserProfile {...this.props.profile} users={this.props.userList} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile,
    userList: store.userState.users
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
