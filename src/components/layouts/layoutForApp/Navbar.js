import React from 'react';
import styled from 'styled-components';
import { DiReact } from 'react-icons/di';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import NavItem from './navbar/NavItem';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import * as sc from '../../../styled-component-helpers/sc';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForRoutes from '../../../data/dataForRoutes';

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <LogoWrapper>
          <DiReact size="30%" color="var(--color-react)" style={{ marginRight: '.5rem' }} />
          <LogoText>React Tutorial</LogoText>
        </LogoWrapper>

        <div>
          {dataForRoutes.map(({ link, text }) => {
            return <NavItem to={link} text={text} key={link} />;
          })}
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

const LogoWrapper = styled.div`
  ${sc.flexCenter()}
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const LogoText = styled.h2`
  font-size: 1.5rem;
  line-height: 1;
  width: 100px;
`;
