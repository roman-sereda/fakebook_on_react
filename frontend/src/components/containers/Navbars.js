import React              from 'react';
import { connect }        from 'react-redux';
import { hashHistory }    from 'react-router'
import store              from '../../store';

import NotLoggedNavbar    from '../navbars/unlogged-navbar';
import LoggedNavbar       from '../navbars/logged-navbar';

import * as userApi       from '../../api/user-api';
import * as postApi       from '../../api/user-api';
import * as galleryApi       from '../../api/user-api';


const Navbars = React.createClass({

  componentWillReceiveProps: function(NextProps) {
    if (NextProps.logged != this.props.logged){
      userApi.checkIfLogged();
    }
  },

  componentWillMount: function() {
    userApi.checkIfLogged();
  },

  SignOut: function(event){
    event.preventDefault();
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

export default connect(mapStateToProps)(Navbars);
