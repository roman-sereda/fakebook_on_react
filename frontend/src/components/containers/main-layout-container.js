import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'
import store from '../../store';

import NotLoggedNavbar from '../layouts/main-layout';
import LoggedNavbar from '../layouts/logged-navbar';
import * as userApi from '../../api/user-api';


const MainLayoutContainer = React.createClass({

  componentWillMount: function() {
    userApi.checkIfLogged();
  },

  SignOut: function(event){
      event.preventDefault();
      console.log("OUT")
      userApi.signOut();
      hashHistory.push('/')
  },

  render: function() {
    return (
      <div>
        {(this.props.logged) ?  <LoggedNavbar SignOut={this.SignOut}/>  : <NotLoggedNavbar/> }
        <div className="grid">
          {this.props.children}
        </div>
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    logged: store.userState.logged
  };
};

export default connect(mapStateToProps)(MainLayoutContainer);
