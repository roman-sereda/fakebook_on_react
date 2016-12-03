import axios from 'axios';
import store from '../store';
import { signOutSuccess, getUsersSuccess, createSessionSuccess, createUserSuccess, userProfileSuccess, editUserSuccess, getIfLoggedInSuccess } from '../actions/user-actions';

export function getIfLoggedIn() {
  return axios.get('http://localhost:3000/islogged')
    .then(response => {
      store.dispatch(getIfLoggedInSuccess(response.data));
      return response;
    });
}

export function signOut() {
  return axios.delete('http://localhost:3000/signout')
    .then(response => {
      store.dispatch(signOutSuccess(response.data));
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

export function createUser(user2) {
  console.log(user2)
  return axios.post('http://localhost:3000/users', {user: user2})
    .then(response => {
      store.dispatch(createUserSuccess(response.data));
      return response;
    });
}

export function editUser(userId, user2) {
  console.log(user2)
  return axios.patch('http://localhost:3000/users/' + userId, {user: user2})
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

export function getProfile(userId) {

  let profile = {};

  return axios.get('http://localhost:3000/users/' + userId)
    .then(response => {

      let user = response.data;
      profile.name = user.name;
      profile.surname = user.surname;
      profile.email = user.email;
      profile.avatar = user.avatar.url;

      return Promise.all([
        axios.get('https://api.github.com/users/' + user.github),
        axios.get('https://api.github.com/users/' + user.github + '/repos')
      ]).then(results => {

        let githubProfile = results[0].data;
        let githubRepos = results[1].data;

        profile.imageUrl = githubProfile.avatar_url;
        profile.repos = githubRepos;

        store.dispatch(userProfileSuccess(profile));

        return;

      });
    });

}
