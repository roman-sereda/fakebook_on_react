import React from 'react';

export default function(props) {
    return this.props.posts.slice(0, this.state.postsCount).map((post) => {
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
}
