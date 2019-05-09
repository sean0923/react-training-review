// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../components/pages/Home';
import Page1 from '../components/pages/Page1';
import LegoPage from '../components/pages/LegoPage';

export const routeKeys = {
  HOME: 'HOME',
  PAGE_1: 'PAGE_1',
  LEGO_PAGE: 'LEGO_PAGE',
};

export const components = {
  [routeKeys.HOME]: Home,
  [routeKeys.PAGE_1]: Page1,
  [routeKeys.LEGO_PAGE]: LegoPage,
};

export const links = {
  [routeKeys.HOME]: '/',
  [routeKeys.PAGE_1]: '/page-1/',
  [routeKeys.LEGO_PAGE]: '/lego/',
};

export const texts = {
  [routeKeys.HOME]: 'Home',
  [routeKeys.PAGE_1]: 'Page 1',
  [routeKeys.LEGO_PAGE]: 'Lego',
};

export const titles = {
  [routeKeys.HOME]: 'Home',
  [routeKeys.PAGE_1]: 'Page 1',
  [routeKeys.LEGO_PAGE]: 'Lego',
};

export const descriptions = {
  [routeKeys.HOME]: 'Home',
  [routeKeys.PAGE_1]: 'Page 1',
  [routeKeys.LEGO_PAGE]: 'Components are like Lego blocks',
};
