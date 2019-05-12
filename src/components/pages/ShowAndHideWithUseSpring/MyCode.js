import React, { useState } from 'react';
// import { animated, useSpring } from 'react-spring';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Button from '../../common/Button';

const MyCode = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <h1>fadeWhenRefresh</h1>

      <hr />

      <h1>hideToVisible</h1>
      <h1>visibleToHide</h1>

      <Button onClick={() => setIsToggle(!isToggle)}>toggle</Button>
    </div>
  );
};

export default MyCode;
