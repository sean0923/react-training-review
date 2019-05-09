import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routeKeys, components, links } from '../data/dataForRoutes';

const SwithAndRoutesForApp = () => {
  return (
    <Switch>
      {[routeKeys.HOME, routeKeys.PAGE_1].map((routeKey) => {
        const link = links[routeKey];

        return (
          <Route
            exact={link === '/'}
            path={link}
            render={(props) => components[routeKey](props)}
            key={link}
          />
        );
      })}
    </Switch>
  );
};

export default SwithAndRoutesForApp;
