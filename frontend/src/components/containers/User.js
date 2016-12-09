import React          from 'react';
import { connect }    from 'react-redux';

import Posts          from './Posts'
import Gallery        from './Photos'
import Friends        from './Friends'
import Profile        from './Profile'
import EndlessScroll  from './PostsList'

import * as userApi   from '../../api/user-api';

const User = React.createClass({

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
    user: store.userState.user
  };
};

export default connect(mapStateToProps)(User);
