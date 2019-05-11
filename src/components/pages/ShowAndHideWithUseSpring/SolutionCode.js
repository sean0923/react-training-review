import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const SolutionCode = () => {
  const [isToggle, setIsToggle] = useState(false);

  const fadeWhenRefresh = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  const fadeWhenToggle = useSpring(isToggle ? { opacity: 0 } : { opacity: 1 });
  const fadeShort = useSpring({ opacity: isToggle ? 0 : 1 });

  return (
    <div>
      <animated.div style={fadeWhenRefresh}>fadeWhenRefresh</animated.div>
      <animated.div style={fadeWhenToggle}>fadeWhenToggle</animated.div>
      <animated.div style={fadeShort}>fadeWhenToggle</animated.div>

      <button onClick={() => setIsToggle(!isToggle)}>toggle</button>
    </div>
  );
};

export default SolutionCode;
