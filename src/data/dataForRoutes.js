// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../components/pages/Home/Home';

import HellowWorld from '../components/pages/HelloWorld/HelloWorld';
import LegoPage from '../components/pages/LegoPage/LegoPage';
import FunctionalComponent from '../components/pages/FunctionalComponent/FunctionalComponent';
import ClassComponent from '../components/pages/ClassComponent/ClassComponent';

export const routeKeys = {
  Home: 'Home',
  HellowWorld: 'HellowWorld',
  LegoPage: 'LegoPage',
  FunctionalComponent: 'FunctionalComponent',
  ClassComponent: 'ClassComponent',
};

export const components = {
  [routeKeys.Home]: Home,
  [routeKeys.HellowWorld]: HellowWorld,
  [routeKeys.LegoPage]: LegoPage,
  [routeKeys.FunctionalComponent]: FunctionalComponent,
  [routeKeys.ClassComponent]: ClassComponent,
};

const getLink = (routeKey) => {
  return routeKey === routeKeys.Home ? '/' : `/${routeKey}/`;
};

const addSpacingBtwCamelCase = (text) => {
  let outputText = text[0];

  for (let i = 1; i < text.length; i++) {
    const char = text[i];
    const isCharUpperCase = char === char.toUpperCase();
    if (isCharUpperCase) {
      outputText += ' ';
    }
    outputText += char;
  }

  return outputText;
};

export default Object.keys(routeKeys).map((routeKey) => {
  return {
    routeKey,
    Component: components[routeKey],
    link: getLink(routeKey),
    text: addSpacingBtwCamelCase(routeKey),
    title: addSpacingBtwCamelCase(routeKey),
    description: addSpacingBtwCamelCase(routeKey),
  };
});
