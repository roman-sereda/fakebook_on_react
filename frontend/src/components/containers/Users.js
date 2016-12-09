import React from 'react';
import { connect } from 'react-redux';
import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';
import store from '../../store';

const UserListContainer = React.createClass({

  componentDidMount: function() {
    userApi.getUsers();
  },

  render: function() {
    return (
      <UserList users={this.props.users} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(UserListContainer);
