import React            from 'react';
import store            from '../../store';
import { connect }      from 'react-redux';

import PostForm         from '../views/posts/form'
import UsersPosts       from '../views/posts/posts'

import * as postApi     from '../../api/post-api';
import * as userApi     from '../../api/user-api';

const Posts = React.createClass({

  onSubmit: function(event){
    event.preventDefault();

    var data = new FormData();
    data.append('image', document.getElementById('file').files[0])
    data.append('body', this.refs.child.getBody())
    data.append('title', this.refs.child.getTitle())
    data.append('user_id', this.props.user)

    postApi.sendPost(data, this.props.user);
    postApi.getPosts( this.props.user );
  },

  render: function() {
    return (
      <div>
        <PostForm onSubmit={this.onSubmit} ref="child" />
      </div>
    )
  }
});

const mapStateToProps = function(store) {
  return {
  };
};

export default connect(mapStateToProps)(Posts);
