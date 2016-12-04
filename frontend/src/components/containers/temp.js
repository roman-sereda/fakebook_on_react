import React from 'react';
import { connect } from 'react-redux';
import Profile2 from './current-user-profile-container';
import SignIn from './sign-in-container';
import * as userApi from '../../api/user-api';
import store from '../../store';

const Temp = React.createClass({

  componentDidMount: function() {
    userApi.getCurrentUser();
  },

  render: function() {
    userApi.getCurrentUser();
    console.log(this.props.user.id)
    return (
      <div className="menu">
        {this.props.user.id == undefined ?  < SignIn /> : < Profile2 /> }
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    user: store.userState.current_user
  };
};

export default connect(mapStateToProps)(Temp);
