import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import InfiniteScroll from 'redux-infinite-scroll';
import PostForm from '../views/posts/form'
import UsersPosts from '../views/posts/posts'

import * as postApi from '../../api/post-api';

const EndlessScroll = React.createClass({

  getInitialState : function() {
    return {
      loadingMore: false,
      postsCount: 10
    };
  },

  componentWillMount: function(){
    console.log('getPosts')
    postApi.getPosts(2);
  },

  _loadMore: function() {
    this.setState({loadingMore: true});
    setTimeout(() => {
      this.setState({postsCount: this.state.postsCount + 20, loadingMore: false})
    }, 1000)
  },

  _renderMessages: function() {
    console.log(this.props.postList == undefined)
    if (this.props.postList == undefined) { return ""; }
    return this.props.postList.slice(0, this.state.postsCount).map((post) => {
      return(
        <div key={post.id + 'post'} className="data-list-item">
            <div className="details">
              {post.title} {post.body} {post.user_login}
              <img alt="Icon" className="post_user_avatar" src={post.user_avatar.url} />
            </div>
          </div>
      )
    })
  },

  render: function(){
    return(
      <InfiniteScroll loadingMore={this.state.loadingMore} threshold={10} elementIsScrollable={false} loadMore={this._loadMore}>
        {this._renderMessages()}
      </InfiniteScroll>
    )
  }

});

const mapStateToProps = function(store) {
  return {
    postList: store.postState.posts
  };
};

export default connect(mapStateToProps)(EndlessScroll);
