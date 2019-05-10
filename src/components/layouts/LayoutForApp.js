import React from 'react';
import styled, { css } from 'styled-components';
import media, { LESS_THAN_TABLET } from '../../styled-component-helpers/media';

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
        <BodyWrapper>
          <Body>{children}</Body>
        </BodyWrapper>
      </Wrapper>
    </div>
  );
};

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const navbarWidth = '220px';

const hideNavbar = css`
  transform: translateX(-100%);
`;
const hideNavbarPlaceHolder = css`
  transform: translateX(-100%);
  width: 0;
`;

const transition = 'transition: all 0.3s linear;';

const NavbarWrapper = styled.div`
  position: fixed;
  width: ${navbarWidth};
  ${transition}
  ${media[LESS_THAN_TABLET](hideNavbar)};
`;

const NavbarPlaceHolder = styled.div`
  width: ${navbarWidth};
  height: 100vh;
  ${transition}
  ${media[LESS_THAN_TABLET](hideNavbarPlaceHolder)};
`;

const Wrapper = styled.div`
  display: flex;
`;

const BodyWrapper = styled.div`
  width: calc(100vw - ${navbarWidth});
  ${media[LESS_THAN_TABLET]`width: 100vw;`};
`;

const Body = styled.div`
  width: 80%;
  margin: 3rem auto;
`;

export default LayoutForApp;
