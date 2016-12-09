import React from 'react';
import InfiniteScroll from 'redux-infinite-scroll';

export default function(props) {
  return (
  <div className="profile-news">
    {props.posts.map((post) => {
      return(
        <div key={post.id + 'post'} className="data-list-item">
            <div className="details">
              {post.title} {post.body} {post.user_login}
              <img alt="Icon" className="post_user_avatar" src={post.user_avatar.url} />

            </div>
          </div>
      )
    })}
  </div>
  );
}
