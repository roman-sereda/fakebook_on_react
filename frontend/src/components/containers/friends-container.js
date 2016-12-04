import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';

import AddFriend from '../views/friendship/add_friend'
import Friends from '../views/friendship/friends'

import * as friendshipApi from '../../api/friendship-api';
import * as userApi from '../../api/user-api';

const FriendsContainer = React.createClass({

  componentDidMount: function() {
    friendshipApi.getFriendship(this.props.user);
    userApi.getCurrentUser();
  },

  onSubmitFriend: function(event){
    event.preventDefault();

    friendshipApi.sendFriendshipRequest(this.props.current_user.id, this.props.user);
  },

  render: function() {
    return (
      <div>
        <AddFriend onSubmitFriend={this.props.onSubmitFriend} />
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
