import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Users from './components/containers/user-list-container';

export default (
  <Router history={hashHistory}>
      <Route path="/" component={Users} />
  </Router>
);
