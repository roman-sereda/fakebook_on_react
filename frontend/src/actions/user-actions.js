import * as types from '../actions/action-types';

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function checkIfLoggedSuccess(logged) {
  return {
    type: types.CHECK_IF_LOGGED_SUCCESS,
    logged
  };
}

export function getCurrentUserSuccess(current_user) {
  return {
    type: types.GET_CURRENT_USER_SUCCESS,
    current_user
  };
}

export function signOutSuccess(user) {
  return {
    type: types.SIGN_OUT_SUCCESS,
    user
  };
}

export function getUserSuccess(user) {
  return {
    type: types.GET_USER_SUCCESS,
    user
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

export function createSessionSuccess(current_user) {
  return {
    type: types.CREATE_SESSION_SUCCESS,
    current_user
  };
}
