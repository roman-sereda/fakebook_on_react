import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';

import AddFriend from '../views/friendship/add_friend'
import Friends from '../views/friendship/friends'

import * as friendshipApi from '../../api/friendship-api';
import * as userApi from '../../api/user-api';

const FriendsContainer = React.createClass({

  componentWillReceiveProps: function(NextProps) {
    friendshipApi.getFriendship(NextProps.user );
  },

  onSubmitFriend: function(event){
    event.preventDefault();
    console.log(this.props.current_user.id + " | " + this.props.user)
    friendshipApi.sendFriendshipRequest(this.props.current_user.id, this.props.user);
  },

  render: function() {
    return (
      <div>
        <AddFriend onSubmitFriend={this.onSubmitFriend} />
        <Friends friends={this.props.friends} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    friends: store.friendshipState.friendship,
    current_user: store.userState.current_user
  };
};

export default connect(mapStateToProps)(FriendsContainer);
