import React          from 'react';
import store          from '../../store';
import { connect }    from 'react-redux';

import Posts          from './posts-container'
import Gallery        from './gallery-container'
import Friends        from './friends-container'
import Profile        from './profile-container'

import * as userApi   from '../../api/user-api';

const CurrentUserProfileContainer = React.createClass({

  componentDidMount: function() {
    userApi.getCurrentUser();
  },

  render: function() {
    return (
      <div>
        <Profile user={this.props.current_user} />
        <Posts   user={this.props.current_user.id} />
        <Friends user={this.props.current_user.id} />
        <Gallery user={this.props.current_user.id} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    current_user: store.userState.current_user
  };
};

export default connect(mapStateToProps)(CurrentUserProfileContainer);
