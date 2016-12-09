import React                    from 'react';
import { connect }              from 'react-redux';
import { hashHistory }          from 'react-router'

import CreateUser               from '../views/create-user';

import * as userApi             from '../../api/user-api';

const SignUp = React.createClass({

  onSubmit: function(event) {
    event.preventDefault();

    var user = new FormData(document.getElementById('new_user'));
    user.append('avatar', document.getElementById('file').files[0])

    userApi.createUser(user);
    userApi.getCurrentUser(user);
    hashHistory.push(`/`)
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
