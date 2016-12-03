import React from 'react';
import { connect } from 'react-redux';
import CreateSession from '../views/create-session';
import * as userApi from '../../api/user-api';

const LogoutOut = React.createClass({

  componentDidMount: function() {
    userApi.signOut();
  },

  render: function() {
    return (
      <div>
        sdfsdfs
      </div>
    );
  },
});

const mapStateToProps = function(store) {
  return {
    logged: store.userState.logged
  };
};

export default connect(mapStateToProps)( LogoutOut );
