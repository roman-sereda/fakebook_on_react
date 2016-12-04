import React from 'react';
import { Link } from 'react-router';


export default function(props) {
  return (
    <div className="user-profile">
      <div className="profile-info">
        <img alt="Icon" src={props.avatar} />
        <h1>{props.name} {props.surname}</h1>
        <h1>{props.email}</h1>
        <form onSubmit={props.onSubmitEdit}>
          <button>Edit profile</button>
        </form>
      </div>
      <div className="profile-news">
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
    </div>
  );
}
