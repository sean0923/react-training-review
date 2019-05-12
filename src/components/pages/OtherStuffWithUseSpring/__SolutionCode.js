import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const SolutionCode = () => {
  const [toggleColor, setToggleColor] = useState(false);

  const colorChange = useSpring(toggleColor ? { color: 'tomato' } : { color: 'green' });

  return (
    <div>
      <animated.h1 style={colorChange}>Color</animated.h1>
      <button onClick={() => setToggleColor(!toggleColor)}>toggleColor</button>
      <hr />

      <animated.h1 style={colorChange}>Color</animated.h1>
      <button onClick={() => setToggleColor(!toggleColor)}>toggleColor</button>
      <hr />
    </div>
  );
};

export default SolutionCode;
