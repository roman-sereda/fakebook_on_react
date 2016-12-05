import axios from 'axios';
import store from '../store';
import { getFriendshipSuccess, sendFriendshipRequestSuccess } from '../actions/friendship-actions';

export function getFriendship(userId) {
  return axios.get('http://localhost:3000/friendships/' + userId)
    .then(response => {
      store.dispatch(getFriendshipSuccess(response.data));
      return response;
    });
}

export function sendFriendshipRequest(userId, friendId) {
  return axios.post('http://localhost:3000/friendships', {user_id: userId, friend_id: friendId})
    .then(response => {
      store.dispatch(sendFriendshipRequestSuccess(response.data));
      return response;
    });
}
