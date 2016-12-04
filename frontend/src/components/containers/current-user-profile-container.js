import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import UserProfile from '../views/user-profile';
import Posts from './posts-container'
import Gallery from './gallery-container'
import Friends from './friends-container'
import EditForm from '../views/users/edit_form';
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

  render: function() {
    return (
      <div>
        <UserProfile {...this.props.profile} onSubmitEdit={this.onSubmitEdit} />
        <div className={this.state.showReply ? 'hidden' : ''}><EditForm UpdateUser = {this.UpdateUser} ref="u_child"/></div>
        <Posts />
        <Friends />
        <Gallery />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile,
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
