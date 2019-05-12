import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import Button from '../../common/Button';

const SolutionCode = () => {
  const [isNavbarShown, setIsNavbarShown] = useState(false);

  const { x } = useSpring({ x: isNavbarShown ? 0 : -100 });
  const move = {
    transform: x.interpolate((xValue) => {
      return `translate3d(${xValue}%, 0, 0)`;
    }),
  };

  return (
    <div>
      <AnimatedNavbarWrapper style={move}>
        <CloseButton onClick={() => setIsNavbarShown(false)}>X</CloseButton>
      </AnimatedNavbarWrapper>
      <Button onClick={() => setIsNavbarShown(true)}>toggle navbar</Button>
    </div>
  );
};

export default SolutionCode;

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
`;
const AnimatedNavbarWrapper = animated(NavbarWrapper);

const CloseButton = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 10rem;
  color: #fff;
  line-height: 1;
  cursor: pointer;
`;
