import axios from 'axios';
import store from '../store';
import { getPhotosSuccess } from '../actions/photos-actions';

export function getPhotos(userId) {
  return axios.get('http://localhost:3000/users/' + userId + '/photos')
    .then(response => {
      store.dispatch(getPhotosSuccess(response.data));
      return response;
    });
}
