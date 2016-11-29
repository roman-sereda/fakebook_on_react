import axios from 'axios';
import store from '../store';
import { getFrienshipSuccess } from '../actions/friendship-actions';

export function getFrienship() {
  return axios.get('http://localhost:3000/frienship/')
    .then(response => {
      store.dispatch(getFrienshipSuccess(response.data));
      return response;
    });
}
