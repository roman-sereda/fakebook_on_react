import React from 'react';
import {browserHistory} from 'react-router'
import { push } from 'react-redux';
import {Router} from 'react-router'
import { connect } from 'react-redux';
import CreateSession from '../views/create-session';
import * as userApi from '../../api/user-api';

static contextTypes = {
  router: React.PropTypes.object.isRequired
}

const SignIn = React.createClass({

  onSubmit: function(event) {
    event.preventDefault();

    let user = {};
    user.email = this.refs.child.getEmail();
    user.password = this.refs.child.getPassword();

    userApi.createSession(user)
    userApi.getIfLoggedIn();
    this.context.router.push('/');
  },

  render: function() {
    return (
      <div>
        <CreateSession onSubmit={this.onSubmit} ref="child" />
      </div>
    );
  },
});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile
  };
};

export default connect(mapStateToProps)( SignIn );
