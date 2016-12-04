import React from 'react';

export default function(props) {
  return (
    <div className = 'profile-list-friends'>
      {props.friends.map(friend => {
        return (
          <div key={friend.id} className="data-list-item">
            <div className="details">
              {friend.friend_id} {friend.user_id}
            </div>
          </div>
        );
      })}
    </div>
  );
}
