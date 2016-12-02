import React from 'react';

export default function(props) {
  return (
    <div>
    <div>Fuck</div>
    <div className="data-list">
      {props.photos.map(photo => {
        return (
          <div key={photo.id} className="data-list-item">
            <div className="details">
              <img alt="Icon" src={photo.image.url} />
              Fuck you
            </div>
          </div>
        );

      })}

    </div>
  </div>
  );
}
