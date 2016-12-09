import React          from 'react';
import store          from '../../store';
import { connect }    from 'react-redux';

import UserProfile    from '../views/users/profile';
import EditForm       from '../views/users/form';

import * as userApi   from '../../api/user-api';

const Profile = React.createClass({
   getInitialState : function() {
     return {
       showReply : true
     };
   },

  UpdateUser: function(event){
    event.preventDefault();

    var user = new FormData(document.getElementById('edit_user'));
    user.append('avatar', document.getElementById('file').files[0])

    userApi.editUser(this.props.user.id, user);
  },

  ShowEditUserForm: function(event){
    event.preventDefault();
    this.setState({
      showReply : !this.state.showReply
    });
  },

  render: function() {
    return (
      <div className="profile-info">
        <UserProfile profile={this.props.user} ShowEditUserForm={this.ShowEditUserForm} />
        <div className={this.state.showReply ? 'hidden' : ''}><EditForm UpdateUser = {this.UpdateUser} /></div>
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
  };
};

export default connect(mapStateToProps)(Profile);
