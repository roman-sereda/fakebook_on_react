import axios from 'axios';
import store from '../store';
import { getPostsSuccess, createPostSuccess } from '../actions/post-actions';

export function getPosts(userId) {
  return axios.get('http://localhost:3000/users/' + userId + '/posts')
    .then(response => {
      store.dispatch(getPostsSuccess(response.data));
      return response;
    });
}

export function sendPost(post2, userId) {
  return axios.post('http://localhost:3000/users/' + userId + '/posts', post2)
    .then(response => {
      store.dispatch(createPostSuccess(response.data));
      return response;
    });
}
