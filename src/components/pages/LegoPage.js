import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import LayoutForPage from '../layouts/LayoutForPage';

import MyCode from './legoPage/MyCode';
import SolutionCode from './legoPage/SolutionCode';

const LegoPage = ({ title, description }) => {
  return (
    <LayoutForPage title={title} description={description}>
      <MyCode />
      <SolutionCode />
    </LayoutForPage>
  );
};

export default LegoPage;
