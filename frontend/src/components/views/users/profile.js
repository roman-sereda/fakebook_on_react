import React from 'react';

export default function(props) {
  return (
      <div>
        <img alt="Icon" className="avatar" src={props.profile.avatar} />
        <h1>{props.profile.name} {props.profile.name} {props.profile.id}</h1>
        <h1>{props.profile.email}</h1>
        <form onSubmit={props.ShowEditUserForm}>
          <button>Edit profile</button>
        </form>
      </div>
  );
}
