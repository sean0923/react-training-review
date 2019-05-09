import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Navbar from './layoutForApp/Navbar';

const LayoutForApp = ({ children }) => {
  return (
    <div>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <Wrapper>
        <NavbarPlaceHolder />
        <Body>{children}</Body>
      </Wrapper>
    </div>
  );
};

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const navbarWidth = '220px';
const NavbarWrapper = styled.div`
  position: fixed;
  width: ${navbarWidth};
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${navbarWidth} 1fr;
`;

const NavbarPlaceHolder = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
`;

const Body = styled.div`
  width: 80%;
  margin: 3rem auto;
`;

export default LayoutForApp;
