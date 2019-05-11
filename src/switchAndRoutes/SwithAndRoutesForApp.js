import React from 'react';
import { Switch, Route } from 'react-router-dom';

import dataForRoutes from '../data/dataForRoutes';

const SwithAndRoutesForApp = () => {
  return (
    <Switch>
      {dataForRoutes.map(({ Component, link, title, description }) => {
        return (
          <Route
            exact={link === '/'}
            path={link}
            render={(props) => <Component {...props} title={title} description={description} />}
            key={link}
          />
        );
      })}
    </Switch>
  );
};

export default SwithAndRoutesForApp;
