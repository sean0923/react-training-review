import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import SvgReactTraining from '../../common/SvgReactTraining';
import NavItem from './navbar/NavItem';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import { routeKeys, texts, links } from '../../../data/dataForRoutes';

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <SvgReactTraining style={{ marginBottom: '1rem' }} />

        <div>
          {[routeKeys.HOME, routeKeys.PAGE_1].map((routeKey) => {
            const link = links[routeKey];
            const text = texts[routeKey];

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
