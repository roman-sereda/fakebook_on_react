import React from 'react';
import { Link } from 'react-router';
import * as userApi from '../../api/user-api';

export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <aside className="primary-aside">
        <ul>
          <li><Link to="/users" activeClassName="active">All users</Link></li>
          <li><Link to="/" activeClassName="active">Profile</Link></li>
          <li><Link to="/gallery" activeClassName="active">All users</Link></li>
          <li>><Link to='/signout' >Sign Out</Link></li>
        </ul>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
    );
}
