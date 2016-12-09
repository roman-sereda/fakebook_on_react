import React            from 'react';
import { connect }      from 'react-redux';
import store            from '../../store';

import Profile2         from './CurrentUser';
import SignIn           from './SignIn';

import * as userApi     from '../../api/user-api';

const Temp = React.createClass({

  componentWillMount: function() {
    userApi.checkIfLogged();
  },

  render: function() {
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
