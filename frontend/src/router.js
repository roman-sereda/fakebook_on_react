import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import MainLayout from './components/layouts/main-layout';
import LayoutAuth from './components/layouts/auth'
import UsersContainer from './components/containers/user-list-container';
import CurrentUserProfileContainer from './components/containers/current-user-profile-container';
import UserProfileContainer from './components/containers/user-profile-container';
import store from './store';
import SignIn from './components/containers/sign-in-container';
import SignUp from './components/containers/sign-up-container';
import Temp from './components/containers/temp';

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Temp} />

        <Route path="users">
          <IndexRoute component={UsersContainer} />
          <Route path=":userId" component={UserProfileContainer} />
        </Route>

    </Route>
    <Route path="auth" component={LayoutAuth}>
      <IndexRoute component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
    </Route>

  </Router>
);
