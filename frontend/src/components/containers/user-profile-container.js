import React          from 'react';
import { connect }    from 'react-redux';

import Posts          from './posts-container'
import Gallery        from './gallery-container'
import Friends        from './friends-container'
import Profile        from './profile-container'

import * as userApi   from '../../api/user-api';

const UserProfileContainer = React.createClass({

  componentDidMount: function() {
    userApi.getUser(this.props.params.userId);
  },

  render: function() {
    console.log(this.props.params.userId)
    return (
      <div>
        <Profile user={this.props.user} />
        <Posts   user={this.props.params.userId} />
        <Friends user={this.props.params.userId} />
        <Gallery user={this.props.params.userId} />
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
