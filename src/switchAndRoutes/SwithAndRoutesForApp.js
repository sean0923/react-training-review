import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routeKeys, components, links, titles, descriptions } from '../data/dataForRoutes';

const SwithAndRoutesForApp = () => {
  return (
    <Switch>
      {[routeKeys.HOME, routeKeys.PAGE_1, routeKeys.LEGO_PAGE].map((routeKey) => {
        const link = links[routeKey];
        const title = titles[routeKey];
        const description = descriptions[routeKey];

        return (
          <Route
            exact={link === '/'}
            path={link}
            render={(props) => components[routeKey]({ ...props, title, description })}
            key={link}
          />
        );
      })}
    </Switch>
  );
};

export default SwithAndRoutesForApp;
