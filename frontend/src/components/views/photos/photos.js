import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div>
      <div className="LinkToGallery"><Link to={props.link}>All photos</Link></div>
      {props.photos.map(photo => {
        return (
          <div className="users_photo" key={'photo' + photo.id} >
            <img className="friend_avatar" src={photo.image.url} />
          </div>
        );
      })}
    </div>
  );
}
