import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';

import AddPhoto from '../views/photos/add_photo'
import Photos from '../views/photos/photos'

import * as photoApi from '../../api/photo-api';
import * as userApi from '../../api/user-api';

const GalleryContainer = React.createClass({

  componentWillReceiveProps: function(NextProps) {
    photoApi.getPhotos(NextProps.user );
  },

  AddImage: function(event){
    event.preventDefault();

    let photo = {};
    photo.user_id = this.props.user;
    photo.image = this.refs.p_child.getImage();

    photoApi.sendPhoto(this.props.user, photo);
  },

  render: function() {
    return (
      <div>
        <Photos photos={this.props.photoList} />
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
