import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <aside className="primary-aside">
        <ul>
          <li><Link to="/users" activeClassName="active">All users</Link></li>
          <li><Link to="/" activeClassName="active">Profile</Link></li>
        </ul>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
    );
}
