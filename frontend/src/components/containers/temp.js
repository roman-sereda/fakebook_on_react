import React from 'react';
import { connect } from 'react-redux';
import Profile2 from './current-user-profile-container';
import SignIn from './sign-in-container';
import * as userApi from '../../api/user-api';
import store from '../../store';

const Temp = React.createClass({

  componentWillMount: function() {
    userApi.checkIfLogged();
  },

  componentWillReceiveProps: function(NextProps) {
    if (NextProps.logged !== this.props.logged)
      userApi.checkIfLogged();
    },

  render: function() {
    console.log(this.props.logged)
    return (
      <div className="menu">
        {(this.props.logged) ?  < Profile2 />  : < SignIn /> }
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    logged: store.userState.logged
  };
};

export default connect(mapStateToProps)(Temp);
