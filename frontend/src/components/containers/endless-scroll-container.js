import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import InfiniteScroll from 'redux-infinite-scroll';
import PostForm from '../views/posts/form'
import UsersPosts from '../views/posts/posts'

import * as postApi   from '../../api/post-api';

const EndlessScroll = React.createClass({

  componentWillMount: function(){
    postApi.getPosts(this.props.user, 0);
  },

  getInitialState : function() {
    return {
      postsCount: 0,
      loadingMore: false
    };
  },

  componentWillReceiveProps: function(NextProps) {
    postApi.getPosts(NextProps.user, postsCount);
  },

  loadMore: function() {
    this.setState({loadingMore: true});
    setTimeout(() => {
      this.props.componentWillReceiveProps();
      this.setState({PostsCount: PostsCount+10, loadingMore: false})
    }, 2000)
  },

  renderPosts: function() {
    return this.props.posts.map((msg) => {
      return(
        <div className="item" key={msg.id}>{msg.body}</div>
      )
    })
  },

  render: function(){
    return(
      <InfiniteScroll loadingMore={this.state.loadingMore} threshold={10} elementIsScrollable={false} loadMore={this.loadMore}>
        {this.renderPosts()}
      </InfiniteScroll>
    )
  }

});

const mapStateToProps = function(store) {
  return {
    posts: store.photoState.posts
  };
};

export default connect(mapStateToProps)(EndlessScroll);
