import React from 'react';
import { Link } from 'react-router';


export default function(props) {
  return (
    <div className="data-list">

      {props.users.map(user => {

        return (
          <div key={user.id} className="data-list-item">
            <div className="details">
              <Link to={'/users/' + user.id}>{user.name}</Link>
              Fuck you
            </div>
          </div>
        );

      })}

    </div>
  );
}
