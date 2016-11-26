import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import UsersContainer from './components/containers/user-list-container';
import CurrentUserProfileContainer from './components/containers/current-user-profile-container';
import UserProfileContainer from './components/containers/user-profile-container';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={CurrentUserProfileContainer} />
      <Route path="prof" component={CurrentUserProfileContainer} />
      <Route path=":userId" component={UserProfileContainer} />
  </Router>
);
