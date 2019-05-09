import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import LayoutForApp from './components/layouts/LayoutForApp';
import SwithAndRoutesForApp from './switchAndRoutes/SwithAndRoutesForApp';

const App = () => {
  return (
    <BrowserRouter>
      <LayoutForApp>
        <SwithAndRoutesForApp />
      </LayoutForApp>
    </BrowserRouter>
  );
};

export default App;
