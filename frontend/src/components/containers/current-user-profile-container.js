import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import UserProfile from '../views/user-profile';
import PostForm from '../views/posts/post_form';
import AddFriend from '../views/friendship/add_friend';
import EditForm from '../views/users/edit_form';
import ProfilePhotos from '../views/photos/profile_photos';
import AddPhoto from '../views/photos/form';
import * as userApi from '../../api/user-api';
import * as postApi from '../../api/post-api';
import * as photoApi from '../../api/photo-api';
import * as friendshipApi from '../../api/friendship-api';

const UserProfileContainer = React.createClass({
  getInitialState : function() {
   return {
     showReply : true
   };
 },

  componentDidMount: function() {
    userApi.getCurrentUser();
    let user = store.getState().userState.current_user;
    userApi.getProfile(user.id);
    postApi.getPosts(user.id);
    friendshipApi.getFriendship(user.id);
    photoApi.getPhotos(user.id);
  },

  onSubmit: function(event){
    event.preventDefault();

    let post = {};
    post.body = this.refs.child.getBody();
    post.title = this.refs.child.getTitle();
    post.user_id = 2;

    postApi.sendPost(post, 2);
    postApi.getPosts(2);
  },

  onSubmitFriend: function(event){
    event.preventDefault();

    friendshipApi.sendFriendshipRequest(2,3);
  },

  UpdateUser: function(event){
    event.preventDefault();

    let user = {};
    user.name = this.refs.u_child.getName();
    user.surname = this.refs.u_child.getSurame();
    user.email = this.refs.u_child.getEmail();
    user.password = this.refs.u_child.getPassword();
    user.password_confirmation = this.refs.u_child.getPasswordConf();

    userApi.editUser(2, user);
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
    photo.user_id = 2;
    photo.image = this.refs.p_child.getImage();

    photoApi.sendPhoto(2, photo);
  },

  render: function() {
    return (
      <div>
        <UserProfile {...this.props.profile} posts={this.props.postList}  friends={this.props.friends} onSubmitEdit={this.onSubmitEdit} />
        <div className={this.state.showReply ? 'hidden' : ''}><EditForm UpdateUser = {this.UpdateUser} ref="u_child"/></div>
        <PostForm onSubmit={this.onSubmit} ref="child" />
        <ProfilePhotos photos={this.props.photoList} />
        <AddPhoto AddImage={this.AddImage} ref="p_child" />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile,
    postList: store.postState.posts,
    friends: store.friendshipState.friendship,
    photoList: store.photoState.photos
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
