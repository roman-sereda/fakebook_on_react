import React            from 'react';
import store            from '../../store';
import { connect }      from 'react-redux';

import AddPhoto         from '../views/photos/add_photo'
import Photos           from '../views/photos/photos'

import * as photoApi    from '../../api/photo-api';
import * as userApi     from '../../api/user-api';

const GalleryContainer = React.createClass({

  componentWillReceiveProps: function(NextProps) {
    photoApi.getPhotos(NextProps.user );
  },

  AddImage: function(event){
    event.preventDefault();

    var data = new FormData();
    data.append('user_id', this.props.user);
    data.append('image', document.getElementById('file').files[0]);

    console.log(data)

    photoApi.sendPhoto(this.props.user, data);
  },

  render: function() {
    return (
      <div className="profile-list-photos">
        <Photos photos={this.props.photoList} link={"/users/" + this.props.user + "/photos"} />
        <AddPhoto AddImage={this.AddImage} ref="p_child" />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    photoList: store.photoState.photos
  };
};

export default connect(mapStateToProps)(GalleryContainer);
