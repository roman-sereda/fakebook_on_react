import React          from 'react';
import store          from '../../store';
import { connect }    from 'react-redux';

import Posts          from './posts-container'
import Gallery        from './gallery-container'
import Friends        from './friends-container'
import Profile        from './profile-container'

const UserProfileContainer = React.createClass({

  render: function() {
    return (
      <div>
        <Profile />
        <Posts   />
        <Friends />
        <Gallery />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
