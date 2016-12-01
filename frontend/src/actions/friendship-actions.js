import * as types from '../actions/action-types';

export function sendFriendshipRequestSuccess(friendship) {
  return {
    type: types.SEND_FRIENDSHIP_REQUEST_SUCCESS,
    friendship
  };
}
