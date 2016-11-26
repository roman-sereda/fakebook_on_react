import React from 'react';

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
    </div>
  );
}
