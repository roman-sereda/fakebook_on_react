import React from 'react';
import { Link } from 'react-router';
import * as userApi from '../../api/user-api';

export default React.createClass({
  render: function() {
    return (
      <div className="app">
            <ul>
              <li className="right"><Link to="/auth/signin" className="btn btn-default">Sign In</Link></li>
              <li className="right"><Link to="/auth/signup" activeClassName="active">Sign Up</Link></li>
            </ul>
      </div>
      );
  }
});
