import React from 'react';

export default function(props) {
  return (
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
  );
}
