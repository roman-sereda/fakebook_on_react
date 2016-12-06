import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';

import UserList from '../views/user-list';
import FriendsList from '../views/friendship/friends-list.js'

import * as friendshipApi from '../../api/friendship-api';


const FriendsListContainer = React.createClass({

  componentDidMount: function() {
    friendshipApi.getFriendship(this.props.params.userId);
  },

  render: function() {
    return (
      <FriendsList friends={this.props.friends} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    friends: store.friendshipState.friendship
  };
};

export default connect(mapStateToProps)(FriendsListContainer);
