import React from 'react';

export default function(props) {
  return (
    <div className = 'profile-list-friends'>
      <h2>Gallery</h2>
      {props.gallery.map(photo => {
        return (
          <div key={'photo' + photo.id} className="data-list-item">
            <div className="details">
              <img alt="Icon" src={photo.image.url} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
