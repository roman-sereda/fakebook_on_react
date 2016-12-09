import React            from 'react';
import store            from '../../store';
import { connect }      from 'react-redux';
import InfiniteScroll   from 'redux-infinite-scroll';

import PostForm         from '../views/posts/form'
import Posts            from '../views/posts/posts-list'
import UsersPosts       from '../views/posts/posts'

import * as postApi     from '../../api/post-api';
import * as userApi     from '../../api/user-api';

const PostsList = React.createClass({

  getInitialState : function() {
    return {
      loadingMore: false,
      postsCount: 10,
      hasMoreItems: true
    };
  },

  componentWillReceiveProps: function(NextProps) {
    if (NextProps.user != this.props.user || NextProps.posts != this.props.posts){
      postApi.getPosts(NextProps.user);
    }
  },

  _loadMore: function() {
    if(this.props.postList.length < this.state.postsCount && this.state.postsCount > 10){ this.setState({hasMoreItems: false}) }
    this.setState({loadingMore: true});
    setTimeout(() => {
      this.setState({postsCount: this.state.postsCount + 10, loadingMore: false})
    }, 1000)
  },

  _renderMessages: function() {
    if (this.props.postList == undefined) { return ""; }
    <Posts posts = {this.props.postList}/>
  },

  render: function(){
    return(
      <InfiniteScroll loadingMore={this.state.loadingMore} hasMore={this.state.hasMoreItems} threshold={10} elementIsScrollable={false} loadMore={this._loadMore}>
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

export default connect(mapStateToProps)(PostsList);
