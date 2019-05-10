import React, { useState } from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------

const Home = () => {
  const [state, setState] = useState('aaa');
  return (
    <div>
      <div>{state}</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
    </div>
  );
};

export default Home;
