import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div className="profile-list-friends">
      {props.photos.map(photo => {
        return (
          <div key={'photo' + photo.id} className="data-list-item">
            <div className="details">
              <img alt="Icon" className="friend_photo" src={photo.image.url} />
            </div>
          </div>
        );
      })}
      <Link to={props.link}>All photos</Link>
    </div>
  );
}
