import * as types from '../actions/action-types';

export function getPostsSuccess(posts) {
  return {
    type: types.GET_POSTS_SUCCESS,
    posts
  };
}
