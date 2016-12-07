import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  photos: []
};

const photoReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PHOTOS_SUCCESS:
      return Object.assign({}, state, { photos: action.photos });

    case types.GET_ALL_PHOTOS_SUCCESS:
      return Object.assign({}, state, { photos: action.photos });

    case types.SEND_PHOTO_SUCCESS:
      return Object.assign({}, state, { photo: action.photo });

  }

  return state;

}

export default photoReducer;
