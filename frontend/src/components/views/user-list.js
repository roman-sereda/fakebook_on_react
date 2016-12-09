import React from 'react';
import { Link } from 'react-router';


export default function(props) {
  return (
    <div>
    <div>Fuck</div>
    <div className="data-list">
      {props.users.map(user => {
        return (
          <div key={user.id} className="data-list-item">
            <div className="details">
              {user.name}
              <Link to={'/users/' + user.id}>{user.id}</Link>
            </div>
          </div>
        );

      })}

    </div>
  </div>
  );
}
