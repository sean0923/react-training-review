import React from 'react';
import styled from 'styled-components';

const Lego = ({ color = 'red', children }) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default Lego;
// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  margin: 1rem;
  background-color: ${(props) => props.color && props.color};
  border: 0.5rem solid var(--color-black);

  padding: 1rem;

  min-height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  text-align: center;
`;
