import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Button from '../../common/Button';

const SolutionCode = () => {
  const [toggleColor, setToggleColor] = useState(false);
  const colorChange = useSpring(toggleColor ? { color: 'tomato' } : { color: 'green' });

  const [toggleFontSize, setToggleFontSize] = useState(false);
  const changeFontSize = useSpring(toggleFontSize ? { fontSize: '3rem' } : { fontSize: '2rem' });

  const [toggleTextPosition, setToggleTextPosition] = useState(false);
  const moveTextPosition = useSpring(
    toggleTextPosition ? { transform: 'translateX(30px)' } : { transform: 'translateX(0px)' }
  );

  return (
    <div>
      <animated.h1 style={colorChange}>Color</animated.h1>
      <Button onClick={() => setToggleColor(!toggleColor)}>toggleColor</Button>

      <hr />

      <animated.h1 style={changeFontSize}>font size</animated.h1>
      <Button onClick={() => setToggleFontSize(!toggleFontSize)}>toggle font size</Button>

      <hr />

      <animated.h1 style={moveTextPosition}>text position</animated.h1>
      <Button onClick={() => setToggleTextPosition(!toggleTextPosition)}>move text</Button>
    </div>
  );
};

export default SolutionCode;
