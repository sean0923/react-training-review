// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../components/pages/Home/Home';

import BasicToggle from '../components/pages/BasicToggle/BasicToggle';

export const routeKeys = {
  HOME: 'HOME',
  BasicToggle: 'BasicToggle',
};

export const components = {
  [routeKeys.HOME]: Home,
  [routeKeys.BasicToggle]: BasicToggle,
};

const getLink = (routeKey) => {
  return routeKey === routeKeys.HOME ? '/' : `/${routeKey}/`;
};

export default Object.keys(routeKeys).map((routeKey) => {
  return {
    routeKey,
    Component: components[routeKey],
    link: getLink(routeKey),
    text: routeKey,
    title: routeKey,
    description: routeKey,
  };
});
