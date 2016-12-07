import React from 'react';

export default function(props) {
  return (
    <div className = 'profile-list-friends'>
      <h2>Gallery</h2>
      {props.gallery.map(photo => {
        return (
          <span key={'photo' + photo.id} className="data-list-item">
            <img alt="Icon" className="gallery_photos" src={photo.image.url} />
          </span>
        );
      })}
    </div>
  );
}
