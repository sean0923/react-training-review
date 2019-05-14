// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../components/pages/Home/Home';

import LegoPage from '../components/pages/LegoPage/LegoPage';
import FunctionalComponent from '../components/pages/FunctionalComponent/FunctionalComponent';

export const routeKeys = {
  HOME: 'HOME',
  LegoPage: 'LegoPage',
  FunctionalComponent: 'FunctionalComponent',
};

export const components = {
  [routeKeys.HOME]: Home,
  [routeKeys.LegoPage]: LegoPage,
  [routeKeys.FunctionalComponent]: FunctionalComponent,
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
