import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import MainLayout from './components/containers/main-layout-container';
import UsersContainer from './components/containers/user-list-container';
import CurrentUserProfileContainer from './components/containers/current-user-profile-container';
import UserProfileContainer from './components/containers/user-profile-container';
import store from './store';
import SignIn from './components/containers/sign-in-container';
import SignUp from './components/containers/sign-up-container';
import Temp from './components/containers/temp';
import FriendsList from './components/containers/friends-list-container';
import Gallery from './components/containers/gallery-list-container'

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Temp} />

        <Route path="users">
          <IndexRoute component={UsersContainer} />
          <Route path=":userId" >
            <IndexRoute component={UserProfileContainer} />
            <Route path="friends" component={FriendsList} />
            <Route path="photos" component={Gallery} />
          </Route>
        </Route>

    
      <Route path="/auth/signin" component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
    </Route>

  </Router>
);
