import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/layouts/main-layout';
import LayoutAuth from './components/layouts/auth'
import UsersContainer from './components/containers/user-list-container';
import CurrentUserProfileContainer from './components/containers/current-user-profile-container';

import SignIn from './components/containers/sign-in-container';
import SignUp from './components/containers/sign-up-container';

function requireAuth(){
  return (nextState, replace) => {
  if (false)
    replace({ pathname: "/auth", query: { return_to: nextState.location.pathname } });
  };
}

export default (
  <Router history={browserHistory}>
      <Router path="/" component={MainLayout} >
        <IndexRoute component={CurrentUserProfileContainer} onEnter={requireAuth()}/>
        <Router path="/auth" component={LayoutAuth}>
          <IndexRoute component={SignIn} />
          <Route path="/auth/signup" component={SignUp} />
        </Router>
      </Router>
  </Router>
);
