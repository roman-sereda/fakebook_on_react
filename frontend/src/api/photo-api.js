import axios from 'axios';
import store from '../store';
import { getPhotosSuccess, getAllPhotosSuccess , sendPhotoSuccess } from '../actions/photos-actions';

export function getPhotos(userId) {
  return axios.get('http://localhost:3000/users/' + userId + '/get_short_photos')
    .then(response => {
      store.dispatch(getPhotosSuccess(response.data));
      return response;
    });
}

export function getAllPhotos(userId) {
  return axios.get('http://localhost:3000/users/' + userId + '/get_full_photos')
    .then(response => {
      store.dispatch(getAllPhotosSuccess(response.data));
      return response;
    });
}

export function sendPhoto(userId, photo) {
  console.log(photo)
  return axios.post('http://localhost:3000/users/' + userId + '/photos', photo)
    .then(response => {
      store.dispatch(sendPhotoSuccess(response.data));
      return response;
    });
}
