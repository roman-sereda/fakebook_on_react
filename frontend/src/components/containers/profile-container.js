import React          from 'react';
import store          from '../../store';
import { connect }    from 'react-redux';

import UserProfile    from '../views/users/profile';
import EditForm       from '../views/users/form';

import * as userApi   from '../../api/user-api';

const ProfileContainer = React.createClass({
   getInitialState : function() {
     return {
       showReply : true
     };
   },

  componentDidMount: function() {
    userApi.getCurrentUser();
  },

  UpdateUser: function(event){
    event.preventDefault();

    let user = {};
    user.name = this.refs.user_child.getName();
    user.surname = this.refs.user_child.getSurame();
    user.email = this.refs.user_child.getEmail();
    user.password = this.refs.user_child.getPassword();
    user.password_confirmation = this.refs.user_child.getPasswordConf();

    userApi.editUser(this.props.user.id, user);
  },

  EdirUserForm: function(event){
    event.preventDefault();
    this.setState({
      showReply : !this.state.showReply
    });
  },

  render: function() {
    return (
      <div>
        <UserProfile profile={this.props.user} EdirUserForm={this.EdirUserForm} />
        <div className={this.state.showReply ? 'hidden' : ''}><EditForm UpdateUser = {this.UpdateUser} ref="user_child"/></div>
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    user: store.userState.current_user
  };
};

export default connect(mapStateToProps)(ProfileContainer);
