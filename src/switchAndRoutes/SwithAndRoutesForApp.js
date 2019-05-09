import React from 'react';
import { Switch, Route } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../components/pages/Home';
import Page1 from '../components/pages/Page1';

const SwithAndRoutesForApp = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/page-1/'} component={Page1} />
    </Switch>
  );
};

export default SwithAndRoutesForApp;
