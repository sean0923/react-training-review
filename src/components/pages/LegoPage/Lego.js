import React from 'react';
import styled from 'styled-components';

const Lego = ({ color = 'red' }) => {
  return <Wrapper color={color} />;
};

export default Lego;
// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  margin: 1rem;
  background-color: ${(props) => props.color && props.color};
  border: 0.5rem solid var(--color-black);

  min-height: 2rem;
`;
