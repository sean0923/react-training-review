// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../components/pages/Home';
import Page1 from '../components/pages/Page1';

export const routeKeys = {
  HOME: 'HOME',
  PAGE_1: 'PAGE_1',
};

export const components = {
  [routeKeys.HOME]: Home,
  [routeKeys.PAGE_1]: Page1,
};

export const texts = {
  [routeKeys.HOME]: 'Home',
  [routeKeys.PAGE_1]: 'Page 1',
};

export const links = {
  [routeKeys.HOME]: '/',
  [routeKeys.PAGE_1]: '/page-1/',
};
