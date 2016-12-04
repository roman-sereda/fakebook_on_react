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
    </div>
  );
}
