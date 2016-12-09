import React                    from 'react';
import { connect }              from 'react-redux';

import CreateSession            from '../views/create-session';

import * as userApi             from '../../api/user-api';

const SignIn = React.createClass({

  onSubmit: function(event) {
    event.preventDefault();

    let user = {};
    user.email = this.refs.child.getEmail();
    user.password = this.refs.child.getPassword();

    userApi.createSession(user)
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
  };
};

export default connect(mapStateToProps)( SignIn );
