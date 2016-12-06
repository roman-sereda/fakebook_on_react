import React from 'react';
import { Link } from 'react-router';
import * as userApi from '../../api/user-api';

export default React.createClass({
  render: function() {
    return (
      <div className="app">
            <ul>
              <li className="right"><Link to="/users" className="btn btn-default">All users</Link></li>
              <li className="right"><Link to="/" activeClassName="active">Profile</Link></li>
              <li className="right"><Link to="/gallery" activeClassName="active">All users</Link></li>
              <li className="right"><a href='#' onClick={this.props.SignOut} >Log Out</a></li>
            </ul>
      </div>
      );
  }
});
