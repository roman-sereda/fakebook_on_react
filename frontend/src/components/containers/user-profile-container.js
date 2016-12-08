import React          from 'react';
import { connect }    from 'react-redux';

import Posts          from './posts-container'
import Gallery        from './gallery-container'
import Friends        from './friends-container'
import Profile        from './profile-container'
import EndlessScroll  from './endless-scroll-container'

import * as userApi   from '../../api/user-api';

const UserProfileContainer = React.createClass({

  componentDidMount: function() {
    userApi.getUser(this.props.params.userId);
  },

  componentWillReceiveProps: function(NextProps) {
      if (NextProps.params.userId != this.props.params.userId){
        userApi.getUser(NextProps.params.userId);
      }
    },

  render: function() {
    return (
      <div>
        <Profile user={this.props.user} />
        <Posts   user={this.props.user.id} />
        <Friends user={this.props.user.id} />
        <Gallery user={this.props.user.id} />
        <EndlessScroll user={this.props.user.id}  />
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    user: store.userState.user
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
