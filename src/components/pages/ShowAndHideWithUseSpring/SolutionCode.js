import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const SolutionCode = () => {
  const [isToggle, setIsToggle] = useState(false);

  const visible = { opacity: 1 };
  const hidden = { opacity: 0 };

  const fadeWhenRefresh = useSpring({ from: hidden, to: visible });
  const hideToVisible = useSpring(isToggle ? visible : hidden);
  const visibleToHide = useSpring(isToggle ? hidden : visible);

  return (
    <div>
      <animated.h1 style={fadeWhenRefresh}>fadeWhenRefresh</animated.h1>
      <animated.h1 style={hideToVisible}>hideToVisible</animated.h1>
      <animated.h1 style={visibleToHide}>visibleToHide</animated.h1>

      <button onClick={() => setIsToggle(!isToggle)}>toggle</button>
    </div>
  );
};

export default SolutionCode;
