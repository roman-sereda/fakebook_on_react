import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  posts: []
};

const friendshipReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_FRIENDSHIP_SUCCESS:
      return Object.assign({}, state, { posts: action.friendships });
  }

  return state;

}

export default friendshipReducer;
