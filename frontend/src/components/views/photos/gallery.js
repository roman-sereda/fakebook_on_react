import React from 'react';

export default function(props) {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      {props.gallery.map(photo => {
        return (
          <span key={'photo' + photo.id}>
            <img alt="Icon" className="gallery_photos" src={photo.image.url} />
          </span>
        );
      })}
    </div>
  );
}
