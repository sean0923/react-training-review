import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Button from '../../common/Button';

const SolutionCode = () => {
  const [toggleColor, setToggleColor] = useState(false);
  const [toggleFontSize, setToggleFontSize] = useState(false);

  const colorChange = useSpring(toggleColor ? { color: 'tomato' } : { color: 'green' });
  const changeFontSize = useSpring(toggleFontSize ? { fontSize: '1rem' } : { fontSize: '3rem' });

  return (
    <div>
      <animated.h1 style={colorChange}>Color</animated.h1>
      <Button onClick={() => setToggleColor(!toggleColor)}>toggleColor</Button>

      <hr />

      <animated.h1 style={changeFontSize}>font size</animated.h1>
      <Button onClick={() => setToggleFontSize(!toggleFontSize)}>toggle font size</Button>
    </div>
  );
};

export default SolutionCode;
