import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import PageLayout from '../../layouts/PageLayout';

import MyCode from './MyCode';
import SolutionCode from './SolutionCode';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import userOneData from './userOneData.json';

const LegoPage = ({ title, description }) => {
  return (
    <PageLayout title={title} description={description}>
      <MyCode userOneData={userOneData} />
      <SolutionCode userOneData={userOneData} />
    </PageLayout>
  );
};

export default LegoPage;
