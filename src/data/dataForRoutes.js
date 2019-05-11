// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../components/pages/Home/Home';

import ShowAndHideWithUseSpring from '../components/pages/ShowAndHideWithUseSpring/ShowAndHideWithUseSpring';

export const routeKeys = {
  HOME: 'HOME',
  ShowAndHideWithUseSpring: 'ShowAndHideWithUseSpring',
};

export const components = {
  [routeKeys.HOME]: Home,
  [routeKeys.ShowAndHideWithUseSpring]: ShowAndHideWithUseSpring,
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
