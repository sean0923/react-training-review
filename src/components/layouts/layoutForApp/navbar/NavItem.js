import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavItem = ({ to, text }) => {
  return <StyledLink to={to}>{text}</StyledLink>;
};

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const StyledLink = styled(Link)`
  margin: 0 0.5rem;
  display: block;
  text-decoration: none;

  color: inherit;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem;
  background-color: var(--color-transparent-dark-1);
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    background-color: var(--color-transparent-dark-3);
  }
`;

export default NavItem;
