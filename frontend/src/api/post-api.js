import axios from 'axios';
import store from '../store';
import { getPostsSuccess } from '../actions/post-actions';

export function getPosts(userId) {
  return axios.get('http://localhost:3000/users/' + userId + '/posts')
    .then(response => {
      store.dispatch(getPostsSuccess(response.data));
      return response;
    });
}

export function sendPost(userId) {
  return axios.post('http://localhost:3000/users/' + userId + '/posts')
    .then(response => {
      store.dispatch(createPostSuccess(response.data));
      return response;
    });
}
