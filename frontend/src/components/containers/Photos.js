import React            from 'react';
import store            from '../../store';
import { connect }      from 'react-redux';

import AddPhoto         from '../views/photos/add_photo'
import Photos           from '../views/photos/photos'

import * as photoApi    from '../../api/photo-api';
import * as userApi     from '../../api/user-api';

const PhotosContainer = React.createClass({

  componentDidMount: function(){
    userApi.getCurrentUser();
  },

  componentWillReceiveProps: function(NextProps) {
    if (NextProps.user != this.props.user || NextProps.photoList != this.props.photoList){
      photoApi.getPhotos(NextProps.user );
    }
  },

  AddImage: function(event){
    event.preventDefault();

    var data = new FormData();
    data.append('user_id', this.props.user);
    data.append('image', document.getElementById('file2').files[0]);

    console.log(data)

    photoApi.sendPhoto(this.props.user, data);
  },

  render: function() {
    if(this.props.current_user.id != this.props.user){
    return (
      <div className="profile-list-photos">
        <Photos photos={this.props.photoList} link={"/users/" + this.props.user + "/photos"} />

      </div>
    );}
    else{
      return(
      <div className="profile-list-photos">
        <Photos photos={this.props.photoList} link={"/users/" + this.props.user + "/photos"} />
        <AddPhoto AddImage={this.AddImage} />
      </div>
      );
    }
  }

});

const mapStateToProps = function(store) {
  return {
    photoList: store.photoState.photos,
    current_user: store.userState.current_user
  };
};

export default connect(mapStateToProps)(PhotosContainer);
