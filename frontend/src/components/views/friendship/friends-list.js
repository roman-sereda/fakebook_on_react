import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div>
      <h2>Friends List</h2>
      {props.friends.map(friend => {
        return (
          <div key={'friend' + friend.id} className="data-list-item">
            <div className="details">
              <Link to={"/users/" + friend.id} activeClassName="active" width="50"><img src={friend.avatar} className="friend_photo"/>{friend.login}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
