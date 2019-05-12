import React, { useState } from 'react';
// import { animated, useSpring } from 'react-spring';

const MyCode = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <h1>fadeWhenRefresh</h1>
      <h1>hideToVisible</h1>
      <h1>visibleToHide</h1>

      <button onClick={() => setIsToggle(!isToggle)}>toggle</button>
    </div>
  );
};

export default MyCode;
