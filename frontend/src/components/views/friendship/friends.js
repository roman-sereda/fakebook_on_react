import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div>
      <div className="LinkToFriends"><Link to={props.link}>All friends</Link></div>
      {props.friends.map(friend => {
        return (
          <div className="friendsl-list" key={'friend' + friend.id}>
              <Link to={"/users/" + friend.id} className="friend" width="50"><img src={friend.avatar} className="friend_photo"/></Link>
          </div>
        );
      })}
    </div>
  );
}
