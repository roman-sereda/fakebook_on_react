import * as types from '../actions/action-types';

export function getFriendshipSuccess(friendship) {
  return {
    type: types.GET_FRIENDSHIP_SUCCESS,
    friendship
  };
}
