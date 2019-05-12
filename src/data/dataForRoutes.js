// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../components/pages/Home/Home';

import ShowAndHideWithUseSpring from '../components/pages/ShowAndHideWithUseSpring/ShowAndHideWithUseSpring';
import OtherStuffWithUseSpring from '../components/pages/OtherStuffWithUseSpring/OtherStuffWithUseSpring';
import PageNavbar from '../components/pages/PageNavbar/PageNavbar';

export const routeKeys = {
  HOME: 'HOME',
  ShowAndHideWithUseSpring: 'ShowAndHideWithUseSpring',
  OtherStuffWithUseSpring: 'OtherStuffWithUseSpring',
  PageNavbar: 'PageNavbar',
};

export const components = {
  [routeKeys.HOME]: Home,
  [routeKeys.ShowAndHideWithUseSpring]: ShowAndHideWithUseSpring,
  [routeKeys.OtherStuffWithUseSpring]: OtherStuffWithUseSpring,
  [routeKeys.PageNavbar]: PageNavbar,
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
