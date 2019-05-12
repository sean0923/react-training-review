import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import PageLayout from '../../layouts/PageLayout';

import __MyCode from './__MyCode';
import __SolutionCode from './__SolutionCode';

const LegoPage = ({ title, description }) => {
  return (
    <PageLayout title={title} description={description}>
      <__MyCode />
      <__SolutionCode />
    </PageLayout>
  );
};

export default LegoPage;
