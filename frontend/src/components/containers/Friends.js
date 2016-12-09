import React              from 'react';
import store              from '../../store';
import { connect }        from 'react-redux';

import AddFriend          from '../views/friendship/add_friend'
import Friends            from '../views/friendship/friends'

import * as friendshipApi from '../../api/friendship-api';
import * as userApi       from '../../api/user-api';

const FriendsContainer = React.createClass({

  componentWillReceiveProps: function(NextProps) {
    if (NextProps.user != this.props.user){
      friendshipApi.getFriendship(NextProps.user );
    }
  },

  onSubmitFriend: function(event){
    event.preventDefault();
    console.log(this.props.current_user.id + " | " + this.props.user)
    friendshipApi.sendFriendshipRequest(this.props.current_user.id, this.props.user);
    friendshipApi.getFriendship(this.props.user);
  },

  render: function() {
    return (
      <div className = 'profile-list-friends'>
        <Friends friends={this.props.friends} link={"/users/" + this.props.user + "/friends"}/>
        <AddFriend onSubmitFriend={this.onSubmitFriend} />
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
