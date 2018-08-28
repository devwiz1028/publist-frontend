import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home';

const Layout = () => (
  <div className="main-container">
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default Layout;
