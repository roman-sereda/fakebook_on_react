import * as types from '../actions/action-types';

export function getPhotosSuccess(photos) {
  return {
    type: types.GET_PHOTOS_SUCCESS,
    photos
  };
}

export function getAllPhotosSuccess(photos) {
  return {
    type: types.GET_ALL_PHOTOS_SUCCESS,
    photos
  };
}

export function sendPhotoSuccess(photo) {
  return {
    type: types.SEND_PHOTO_SUCCESS,
    photo
  };
}
