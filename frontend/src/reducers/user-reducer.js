import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  user: [],
  users: [],
  current_user: [],
  logged: false
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.GET_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, { current_user: action.curent_user });

    case types.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, { logged: false });

    case types.GET_IF_LOGGED_IN_SUCCESS:
      return Object.assign({}, state, { logged: action.logge });

    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

    case types.CREATE_USER_SUCCESS:
      return Object.assign({}, state, { user: action.user });

    case types.EDIT_USER_SUCCESS:
      return Object.assign({}, state, { user: action.user });

    case types.CREATE_SESSION_SUCCESS:
      return Object.assign({}, state, { logged: true });
  }

  return state;

}

export default userReducer;
