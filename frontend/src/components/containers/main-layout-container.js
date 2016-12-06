import React from 'react';
import { connect, hashHistory } from 'react-redux';
import store from '../../store';

import MainLayout from '../layouts/main-layout';
import * as userApi from '../../api/user-api';


const MainLayoutContainer = React.createClass({

  SignOut: function(event){
      event.preventDefault();
      console.log("OUT")
      userApi.signOut();
  },

  render: function() {
    return (
      <div>
        <MainLayout SignOut={this.SignOut}/>
        <div className="grid">
          {this.props.children}
        </div>
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
  };
};

export default connect(mapStateToProps)(MainLayoutContainer);
