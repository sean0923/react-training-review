import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import PageLayout from '../../layouts/PageLayout';

import MyCode from './MyCode';
import SolutionCode from './SolutionCode';

const LegoPage = ({ title, description }) => {
  return (
    <PageLayout title={title} description={description}>
      <MyCode />
      <SolutionCode />
    </PageLayout>
  );
};

export default LegoPage;
