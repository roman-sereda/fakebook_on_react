import React from 'react';
import { connect } from 'react-redux';
import UsersList from '../views/user-list';
import * as userApi from '../../api/user-api';
import store from '../../store';

const Users = React.createClass({

  componentDidMount: function() {
    userApi.getUsers();
  },

  render: function() {
    return (
      <UsersList users={this.props.users} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(Users);
