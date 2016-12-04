import React from 'react';
import { Link } from 'react-router';
import * as userApi from '../../api/user-api';

function Signout() {
  userApi.signOut();
}

export default function(props) {
  return (
    <div className="app">
        <div>
          <ul>
            <li className="right"><Link to="/users" className="btn btn-default">All users</Link></li>
            <li className="right"><Link to="/" activeClassName="active">Profile</Link></li>
            <li className="right"><Link to="/gallery" activeClassName="active">All users</Link></li>
            <li className="right"><Link to='/' onClick={Signout()} >Log Out</Link></li>
          </ul>
        </div>
        <div className="grid">
          {props.children}
        </div>
    </div>
    );
}
