import React          from 'react';
import store          from '../../store';
import { connect }    from 'react-redux';

import Posts          from './posts-container'
import Gallery        from './gallery-container'
import Friends        from './friends-container'
import Profile        from './profile-container'
import EndlessScroll  from './endless-scroll-container'

import * as userApi   from '../../api/user-api';
import * as postApi   from '../../api/post-api';

const CurrentUserProfileContainer = React.createClass({

  componentWillMount: function() {
    userApi.getCurrentUser();
  },

  componentWillReceiveProps: function(NextProps) {
    if (NextProps.user != this.props.user){
      userApi.getCurrentUser();
    }
  },


  render: function() {
    return (
      <div>
        <Profile user={this.props.user} />
        <Posts   user={this.props.user.id} />
        <Friends user={this.props.user.id} />
        <Gallery user={this.props.user.id} />
        <EndlessScroll user={this.props.user.id} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    user: store.userState.current_user
  };
};

export default connect(mapStateToProps)(CurrentUserProfileContainer);
