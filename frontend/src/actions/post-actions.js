import * as types from '../actions/action-types';

export function getPostsSuccess(posts) {
  return {
    type: types.GET_POSTS_SUCCESS,
    posts
  };
}

export function createPostSuccess(post) {
  return {
    type: types.CREATE_POST_SUCCESS,
    post
  };
}
