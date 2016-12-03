import * as types from '../actions/action-types';

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function signOutSuccess(logged) {
  return {
    type: types.SIGN_OUT_SUCCESS,
    logged
  };
}

export function getIfLoggedInSuccess(logged) {
  return {
    type: types.GET_IF_LOGGED_IN_SUCCESS,
    logged
  };
}

export function userProfileSuccess(userProfile) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    userProfile
  };
}

export function editUserSuccess(user) {
  return {
    type: types.EDIT_USER_SUCCESS,
    user
  };
}

export function createUserSuccess(user) {
  return {
    type: types.CREATE_USER_SUCCESS,
    user
  };
}

export function createSessionSuccess(user) {
  return {
    type: types.CREATE_SESSION_SUCCESS,
    user
  };
}
