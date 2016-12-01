import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  frienship: []
};

const friendshipReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_FRIENDSHIP_SUCCESS:
      return Object.assign({}, state, { frienship: action.friendship });

    case types.SEND_FRIENDSHIP_REQUEST_SUCCESS:
      return Object.assign({}, state, { frienship: action.friendship });
  }

  return state;

}

export default friendshipReducer;
