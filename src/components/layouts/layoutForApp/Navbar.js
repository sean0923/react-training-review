import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import SvgReactTraining from '../../common/SvgReactTraining';
import NavItem from './navbar/NavItem';

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <SvgReactTraining style={{ marginBottom: '1rem' }} />

        <div>
          <NavItem text="Home" to="/" />
          <NavItem text="Page 1" to="/page-1/" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background-color: var(--color-transparent-dark-1);
  height: 100vh;
  padding: 1rem;
`;
