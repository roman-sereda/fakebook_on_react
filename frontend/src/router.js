import React from 'react';
import store from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Navbars          from './components/containers/Navbars';
import Users            from './components/containers/Users';
import User             from './components/containers/Users';
import SignIn           from './components/containers/SignIn';
import SignUp           from './components/containers/SignUp';
import MRouter           from './components/containers/Router';
import FriendsList      from './components/containers/FriendsList';
import Gallery          from './components/containers/Gallery'

export default (
  <Router history={hashHistory}>
    <Route component={Navbars}>
      <Route path="/" component={MRouter} />

        <Route path="users">
          <IndexRoute component={Users} />
          <Route path=":userId" >
            <IndexRoute component={User} />
            <Route path="friends" component={FriendsList} />
            <Route path="photos" component={Gallery} />
          </Route>
        </Route>


      <Route path="/auth/signin" component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
    </Route>

  </Router>
);
