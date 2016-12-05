import React from 'react';
import { connect } from 'react-redux';
import Profile2 from './current-user-profile-container';
import SignIn from './sign-in-container';
import * as userApi from '../../api/user-api';
import store from '../../store';

const Temp = React.createClass({

  componentDidMount: function() {
    userApi.checkIfLogged();
  },

  render: function() {
    return (
      <div className="menu">
        {this.props.logged ?  < Profile2 />  : < SignIn /> }
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
