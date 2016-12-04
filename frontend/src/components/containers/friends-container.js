import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';

import AddFriend from '../views/friendship/add_friend'
import Friends from '../views/friendship/friends'

import * as friendshipApi from '../../api/friendship-api';
import * as userApi from '../../api/user-api';

const FriendsContainer = React.createClass({

  componentDidMount: function() {
    friendshipApi.getFriendship(this.props.user.id);
  },

  onSubmitFriend: function(event){
    event.preventDefault();

    let userId = this.props.params.userId

    friendshipApi.sendFriendshipRequest(this.props.user.id, userId);
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
    friends: store.friendshipState.friendship
  };
};

export default connect(mapStateToProps)(FriendsContainer);
