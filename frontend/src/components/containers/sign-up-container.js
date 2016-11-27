import React from 'react';
import { connect } from 'react-redux';
import CreateUser from '../views/create-user';
import * as userApi from '../../api/user-api';

const SignUp = React.createClass({

  onSubmit: function(event) {
    event.preventDefault();

    let user = {};
    user.name = this.refs.child.getName();
    user.surname = this.refs.child.getSurame();
    user.email = this.refs.child.getEmail();
    user.password = this.refs.child.getPassword();
    user.password_confirmation = this.refs.child.getPasswordConf();

    userApi.createUser(user)
  },

  render: function() {
    return (
      <div>
        <CreateUser onSubmit={this.onSubmit} ref="child" />
      </div>
    );
  },
});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile
  };
};

export default connect(mapStateToProps)( SignUp );
