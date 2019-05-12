// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../components/pages/Home/Home';

import ShowAndHideWithUseSpring from '../components/pages/ShowAndHideWithUseSpring/ShowAndHideWithUseSpring';
import OtherStuffWithUseSpring from '../components/pages/OtherStuffWithUseSpring/OtherStuffWithUseSpring';

export const routeKeys = {
  HOME: 'HOME',
  ShowAndHideWithUseSpring: 'ShowAndHideWithUseSpring',
  OtherStuffWithUseSpring: 'OtherStuffWithUseSpring',
};

export const components = {
  [routeKeys.HOME]: Home,
  [routeKeys.ShowAndHideWithUseSpring]: ShowAndHideWithUseSpring,
  [routeKeys.OtherStuffWithUseSpring]: OtherStuffWithUseSpring,
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
