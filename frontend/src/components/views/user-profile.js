import React from 'react';
import { Link } from 'react-router';


export default function(props) {
  return (
    <div className="user-profile">
      <div className="details">
        <h3>Github Repos:</h3>
        <h1>{props.name}</h1>
        <h1>{props.surname}</h1>
        <h1>{props.email}</h1>
        <h1>{props.avatar}</h1>
        <img alt="Icon" src={props.avatar} />
      </div>
      <div>
        {props.posts.map(post => {
          return (
            <div key={post.id} className="data-list-item">
              <div className="details">
                {post.title} {post.body}
              </div>
            </div>
          );
        })}
      </div>
      <div>
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
      <div className="data-list">
      </div>
    </div>
  );
}
