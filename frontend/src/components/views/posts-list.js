import React from 'react';
import { Link } from 'react-router';


export default function(props) {
  return (
    <div className="data-list">

      {props.posts.map(post => {

        return (
          <div key={post.id} className="data-list-item">
            <div className="details">
              {post.title}
              Fuck you
            </div>
          </div>
        );

      })}

    </div>
  );
}
