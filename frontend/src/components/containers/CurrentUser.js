import React          from 'react';
import store          from '../../store';
import { connect }    from 'react-redux';

import Posts          from './Posts'
import Gallery        from './Photos'
import Friends        from './Friends'
import Profile        from './Profile'
import EndlessScroll  from './PostsList'

import * as userApi   from '../../api/user-api';
import * as postApi   from '../../api/post-api';

const CurrentUser = React.createClass({

  componentWillMount: function() {
    userApi.getCurrentUser();
  },

  componentWillReceiveProps: function(NextProps) {
    if (NextProps.user.id != this.props.user.id){
      userApi.getCurrentUser();
    }
  },


  render: function() {
    return (
      <div className="user-profile">
        <div className="profile-news">
        <Posts   user={this.props.user.id} />
        <EndlessScroll user={this.props.user.id} />
        </div>
        <Profile user={this.props.user} />
        <Friends user={this.props.user.id} />
        <Gallery user={this.props.user.id} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    user: store.userState.current_user
  };
};

export default connect(mapStateToProps)(CurrentUser);
