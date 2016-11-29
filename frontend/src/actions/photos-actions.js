import * as types from '../actions/action-types';

export function getPhotosSuccess(photos) {
  return {
    type: types.GET_PHOTOS_SUCCESS,
    photos
  };
}
