import axios from 'axios';
import store from '../store';
import { checkIfLoggedSuccess, getUserSuccess, getCurrentUserSuccess, signOutSuccess, getUsersSuccess, createSessionSuccess, createUserSuccess, userProfileSuccess, editUserSuccess } from '../actions/user-actions';

export function signOut() {
  return axios.delete('http://localhost:3000/signout')
    .then(response => {
      store.dispatch(signOutSuccess(response.data));
      return response;
    });
}

export function getCurrentUser() {
  return axios.get('http://localhost:3000/current_user')
    .then(response => {
      store.dispatch(getCurrentUserSuccess(response.data));
      return response;
    });
}

export function checkIfLogged() {
  return axios.get('http://localhost:3000/iflogged')
    .then(response => {
      store.dispatch(checkIfLoggedSuccess(response.data));
      return response;
    });
}

export function getUser(userId) {
  return axios.get('http://localhost:3000/users/' + userId)
    .then(response => {
      store.dispatch(getUserSuccess(response.data));
      return response;
    });
}

export function getUsers() {
  return axios.get('http://localhost:3000/users')
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

export function createUser(user) {
  return axios.post('http://localhost:3000/users', user)
    .then(response => {
      store.dispatch(createUserSuccess(response.data));
      return response;
    });
}

export function editUser(userId, user) {
  return axios.patch('http://localhost:3000/users/' + userId, user)
    .then(response => {
      store.dispatch(editUserSuccess(response.data));
      return response;
    });
}

export function createSession(user2) {
  console.log(user2)
  return axios.post('http://localhost:3000/sessions', {user: user2})
    .then(response => {
      console.log("success");
      store.dispatch(createSessionSuccess(response.data));
      return response;
    });
}
