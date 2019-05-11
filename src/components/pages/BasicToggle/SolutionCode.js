import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const SolutionCode = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <div>Hellow World</div>

      <button onClick={() => setIsToggle(!isToggle)}>toggle</button>
    </div>
  );
};

export default SolutionCode;
