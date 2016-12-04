import React          from 'react';
import store          from '../../store';
import { connect }    from 'react-redux';

import Posts          from './posts-container'
import Gallery        from './gallery-container'
import Friends        from './friends-container'
import Profile        from './profile-container'

import * as userApi   from '../../api/user-api';

const UserProfileContainer = React.createClass({

  componentDidMount: function() {

    let userId = this.props.params.userId
    console.log('user id: ' + userId)
    userApi.getUser(userId);
  },

  render: function() {
    return (
      <div>
        <Profile user={this.props.userPage} />
        <Posts   user={this.props.params.userId} />
        <Friends user={this.props.params.userId} />
        <Gallery user={this.props.params.userId} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    userPage: store.userState.user
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
