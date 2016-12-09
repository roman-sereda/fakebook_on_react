import React            from 'react';
import store            from '../../store';
import { connect }      from 'react-redux';
import InfiniteScroll   from 'redux-infinite-scroll';

import PostForm         from '../views/posts/form'
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
    return this.props.postList.slice(0, this.state.postsCount).map((post) => {
      if(post.photo == undefined && post.video_url == undefined){
      return(
        <div className="post" key={post.id + 'post'}>
          <div className="post-avatar"><img alt="Icon" className="post_user_avatar" src={post.user_avatar.url} /></div>
          <div className="post-login">{post.user_login}</div>
          <div className="post-contetnt">{post.title} {post.body}</div>
        </div>
      )}
      else if(post.photo != undefined && post.video_url == undefined){
        return(
          <div className="post" key={post.id + 'post'}>
            <div className="post-avatar"><img alt="Icon" className="post_user_avatar" src={post.user_avatar.url} /></div>
            <div className="post-login">{post.user_login}</div>
            <div className="post-contetnt">{post.title} {post.body}</div>
            <img alt="Icon" className="post_photo" src={post.photo} />
          </div>
      )}
      else if(post.photo == undefined && post.video_url != undefined){
        console.log(post.video_url)
        return(
          <div className="post" key={post.id + 'post'}>
            <div className="post-avatar"><img alt="Icon" className="post_user_avatar" src={post.user_avatar.url} /></div>
            <div className="post-login">{post.user_login}</div>
            <div className="post-contetnt">{post.title} {post.body}</div>
            <iframe title="YouTube video player" width="320" height="180" src={post.video_url} ></iframe>
          </div>
      )}
    })
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
