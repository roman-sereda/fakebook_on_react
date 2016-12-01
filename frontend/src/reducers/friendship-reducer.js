import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  friendship: []
};

const friendshipReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_FRIENDSHIP_SUCCESS:
      return Object.assign({}, state, { friendship: action.friendship });

    case types.SEND_FRIENDSHIP_REQUEST_SUCCESS:
      return Object.assign({}, state, { friendship_request: action.friendship_request });
  }

  return state;

}

export default friendshipReducer;
