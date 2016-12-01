import * as types from '../actions/action-types';

export function getFriendshipSuccess(friendship) {
  return {
    type: types.GET_FRIENDSHIP_SUCCESS,
    friendship
  };
}

export function sendFriendshipRequestSuccess(friendship_request) {
  return {
    type: types.SEND_FRIENDSHIP_REQUEST_SUCCESS,
    friendship_request
  };
}
