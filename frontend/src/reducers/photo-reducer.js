import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  posts: []
};

const photoReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PHOTOS_SUCCESS:
      return Object.assign({}, state, { posts: action.photos });
  }

  return state;

}

export default photoReducer;
