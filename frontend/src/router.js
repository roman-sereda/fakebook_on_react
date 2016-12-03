import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import MainLayout from './components/layouts/main-layout';
import LayoutAuth from './components/layouts/auth'
import UsersContainer from './components/containers/user-list-container';
import CurrentUserProfileContainer from './components/containers/current-user-profile-container';
import UserProfileContainer from './components/containers/user-profile-container';

import LogOut from './components/containers/logout';

import SignIn from './components/containers/sign-in-container';
import SignUp from './components/containers/sign-up-container';

import * as userApi from './api/user-api';

function requireAuth(){
  var log = userApi.logged
  console.log(log)
  return (nextState, replace) => {
  if (log)
    replace({ pathname: "/auth", query: { return_to: nextState.location.pathname } });
  };
}

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={CurrentUserProfileContainer} onEnter={requireAuth()}/>

        <Route path="users">
          <IndexRoute component={UsersContainer} />
          <Route path=":userId" component={UserProfileContainer} />
        </Route>

    </Route>
    <Route path="auth" component={LayoutAuth}>
      <IndexRoute component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
    </Route>

    <Route path="/signout" component={LogOut} />

  </Router>
);
