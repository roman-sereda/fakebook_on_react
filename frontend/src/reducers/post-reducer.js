import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  posts: []
};

const postReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_POSTS_SUCCESS:
      return Object.assign({}, state, { posts: action.posts });
  }

  return state;

}

export default postReducer;
