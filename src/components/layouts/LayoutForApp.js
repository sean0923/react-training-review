import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { MdClose, MdMenu } from 'react-icons/md';

import media, { LESS_THAN_TABLET } from '../../styled-component-helpers/media';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------

import Navbar from './layoutForApp/Navbar';

const LayoutForApp = ({ children }) => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  return (
    <div>
      <NavbarWrapper isNavbarHidden={isNavbarHidden}>
        <Navbar />
      </NavbarWrapper>
      <Wrapper>
        <NavbarPlaceHolder isNavbarHidden={isNavbarHidden} />
        <BodyWrapper isNavbarHidden={isNavbarHidden}>
          <NavbarToggleBtn onClick={() => setIsNavbarHidden(!isNavbarHidden)}>
            {isNavbarHidden ? <MdMenu size="100%" /> : <MdClose size="100%" />}
          </NavbarToggleBtn>

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

const hideNavbar = 'transform: translateX(-100%);';

const hideNavbarPlaceHolder = `
  transform: translateX(-100%);
  width: 0;
`;

const transition = 'transition: all 0.3s linear;';

const NavbarWrapper = styled.div`
  position: fixed;
  width: ${navbarWidth};
  ${transition}
  ${media[LESS_THAN_TABLET]`
    ${(props) => props.isNavbarHidden && hideNavbar}
  `};
`;

const NavbarPlaceHolder = styled.div`
  width: ${navbarWidth};
  height: 100vh;
  ${transition}
  ${media[LESS_THAN_TABLET]`
    ${(props) => props.isNavbarHidden && hideNavbarPlaceHolder}
  `};
`;

const Wrapper = styled.div`
  display: flex;
`;

const BodyWrapper = styled.div`
  position: relative;
  width: calc(100vw - ${navbarWidth});

  ${media[LESS_THAN_TABLET]`
    ${(props) => props.isNavbarHidden && 'width: 100vw;'}
  `};
`;

const Body = styled.div`
  width: 80%;
  margin: 3rem auto;
`;

const NavbarToggleBtn = styled.div`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-transparent-dark-2);

  visibility: hidden;
  opacity: 0;

  ${transition}

  ${media[LESS_THAN_TABLET]`
    visibility: visible;
    opacity: 1;
  `};
`;

export default LayoutForApp;
