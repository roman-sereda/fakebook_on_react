import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="user-profile">
      <div className="details">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}
