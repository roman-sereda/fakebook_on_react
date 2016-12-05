import React from 'react';

export default function(props) {
  return (
    <div className="user-profile">
      <div className="profile-info">
        <img alt="Icon" src={props.profile.avatar} />
        <h1>{props.profile.name} {props.profile.name} {props.profile.id}</h1>
        <h1>{props.profile.email}</h1>
        <form onSubmit={props.onSubmitEdit}>
          <button>Edit profile</button>
        </form>
      </div>
    </div>
  );
}
