import * as types from '../actions/action-types';

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function userProfileSuccess(userProfile) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    userProfile
  };
}

export function createSessionSuccess(userProfile) {
  return {
    type: types.CREATE_SESSION_SUCCESS,
    user
  };
}
