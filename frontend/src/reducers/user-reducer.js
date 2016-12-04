import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  user: [],
  userProfile: [],
  users: [],
  current_user: []
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.GET_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, { current_user: action.current_user });

    case types.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, { current_user: [] });

    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

    case types.CREATE_USER_SUCCESS:
      return Object.assign({}, state, { user: action.user });

    case types.EDIT_USER_SUCCESS:
      return Object.assign({}, state, { user: action.user });

    case types.CREATE_SESSION_SUCCESS:
      return Object.assign({}, state, { current_user: action.user });
  }

  return state;

}

export default userReducer;
