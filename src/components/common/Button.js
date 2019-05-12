import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...rest }) => {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const ButtonWrapper = styled.button`
  cursor: pointer;
  padding: 0.2rem .8rem;
  font-size: .8rem;
  border-radius: 4px;
  border: none;

  background-color: var(--color-transparent-dark-1);
  border: 1px solid var(--color-transparent-dark-1);

  &:hover {
    background-color: var(--color-transparent-dark-3);
    border: 1px solid var(--color-transparent-dark-3);
  }

  &:active {
    background-color: var(--color-transparent-dark-5);
    border: 1px solid var(--color-transparent-dark-5);
  }

  &:focus {
    outline: none;
    box-shadow: var(--box-shadow);
  }
`;

export default Button;
