import React              from 'react';
import store              from '../../store';
import { connect }        from 'react-redux';

import AddFriend          from '../views/friendship/add_friend'
import Friends            from '../views/friendship/friends'

import * as friendshipApi from '../../api/friendship-api';
import * as userApi       from '../../api/user-api';

const FriendsContainer = React.createClass({

  componentDidMount: function(){
    userApi.getCurrentUser();
  },

  componentWillReceiveProps: function(NextProps) {
    if (NextProps.user != this.props.user || NextProps.posts != this.props.posts){
      friendshipApi.getFriendship(NextProps.user );
    }
  },

  onSubmitFriend: function(event){
    event.preventDefault();
    friendshipApi.sendFriendshipRequest(this.props.current_user.id, this.props.user);
    friendshipApi.getFriendship(this.props.user);
  },

  render: function() {
    if(this.props.current_user.id != this.props.user){
      return (
        <div className = 'profile-list-friends'>
          <Friends friends={this.props.friends} link={"/users/" + this.props.user + "/friends"}/>
            <AddFriend onSubmitFriend={this.onSubmitFriend} />
        </div>
    );}
    else{
      return (
        <div className = 'profile-list-friends'>
          <Friends friends={this.props.friends} link={"/users/" + this.props.user + "/friends"}/>
        </div>
    );}
  }

});

const mapStateToProps = function(store) {
  return {
    friends: store.friendshipState.friendship,
    current_user: store.userState.current_user
  };
};

export default connect(mapStateToProps)(FriendsContainer);
