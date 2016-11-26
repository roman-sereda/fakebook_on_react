import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../views/authorization';
import * as userApi from '../../api/user-api';

const UserProfileContainer = React.createClass({

  onSubmit: function(event) {
    event.preventDefault();

    // By assigning a "child" ref to <SearchForm />, we
    // can use that reference to gain access to the
    // .getQuery() method. See the code for
    // <SearchForm /> to see how it returns a value.
    let user = {};
    user.name = this.refs.child.getName();
    user.surname = this.refs.child.getSurame();
    user.email = this.refs.child.getEmail();
    user.password = this.refs.child.getPassword();
    user.password_confirmation = this.refs.child.getPasswordConf();

    userApi.createSession(user)
  },

  render: function() {
    return (
      <UserProfile onSubmit={this.onSubmit} ref="child" />
    );
  },
});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
