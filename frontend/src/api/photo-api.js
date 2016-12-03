import axios from 'axios';
import store from '../store';
import { getPhotosSuccess, sendPhotoSuccess } from '../actions/photos-actions';

export function getPhotos(userId) {
  return axios.get('http://localhost:3000/users/' + userId + '/photos')
    .then(response => {
      store.dispatch(getPhotosSuccess(response.data));
      return response;
    });
}

export function sendPhoto(userId, photo2) {
  console.log(photo2)
  return axios.post('http://localhost:3000/users/' + userId + '/photos', {photo: photo2})
    .then(response => {
      store.dispatch(sendPhotoSuccess(response.data));
      return response;
    });
}
