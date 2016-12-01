import axios from 'axios';
import store from '../store';
import { getFrienshipSuccess, sendFriendshipRequestSuccess } from '../actions/friendship-actions';

export function getFrienship() {
  return axios.get('http://localhost:3000/frienship/')
    .then(response => {
      store.dispatch(getFrienshipSuccess(response.data));
      return response;
    });
}

export function sendFriendshipRequest(userId, friendId) {
  console.log(userId, friendId)
  return axios.post('http://localhost:3000/friendships', {user_id: userId, friend_id: friendId})
    .then(response => {
      store.dispatch(sendFriendshipRequestSuccess(response.data));
      return response;
    });
}
