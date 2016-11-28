import React from 'react';
import { Link } from 'react-router';

getNews: function(){

}

// Using "Stateless Functional Components"
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
      <div className="data-list">
        {if(props.posts != NULL){
        props.posts.map(post => {
          return (
            <div key={post.id} className="data-list-item">
              <div className="details">
                {post.title} {post.body}
              </div>
            </div>
          );
        })}}
      </div>
    </div>
  );
}
