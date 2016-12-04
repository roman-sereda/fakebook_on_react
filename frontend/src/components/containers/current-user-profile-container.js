import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import UserProfile from '../views/user-profile';
import Posts from './posts-container'
import Friends from './friends-container'
import EditForm from '../views/users/edit_form';
import ProfilePhotos from '../views/photos/profile_photos';
import AddPhoto from '../views/photos/form';
import * as userApi from '../../api/user-api';
import * as photoApi from '../../api/photo-api';

const UserProfileContainer = React.createClass({
  getInitialState : function() {
   return {
     showReply : true
   };
 },

  componentDidMount: function() {
    userApi.getCurrentUser();
    userApi.getProfile(this.props.user.id);
    friendshipApi.getFriendship(this.props.user.id);
    photoApi.getPhotos(this.props.user.id);
  },

  UpdateUser: function(event){
    event.preventDefault();

    let user = {};
    user.name = this.refs.u_child.getName();
    user.surname = this.refs.u_child.getSurame();
    user.email = this.refs.u_child.getEmail();
    user.password = this.refs.u_child.getPassword();
    user.password_confirmation = this.refs.u_child.getPasswordConf();

    userApi.editUser(this.props.user.id, user);
  },


  onSubmitEdit: function(event){
    event.preventDefault();
    this.setState({
      showReply : !this.state.showReply
    });
  },

  AddImage: function(event){
    event.preventDefault();

    let photo = {};
    photo.user_id = this.props.user.id;
    photo.image = this.refs.p_child.getImage();

    photoApi.sendPhoto(this.props.user.id, photo);
  },

  render: function() {
    return (
      <div>
        <UserProfile {...this.props.profile} onSubmitEdit={this.onSubmitEdit} />
        <div className={this.state.showReply ? 'hidden' : ''}><EditForm UpdateUser = {this.UpdateUser} ref="u_child"/></div>
        <Posts />
        <Friends />
        <ProfilePhotos photos={this.props.photoList} />
        <AddPhoto AddImage={this.AddImage} ref="p_child" />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile,
    photoList: store.photoState.photos,
    user: store.userState.current_user
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
