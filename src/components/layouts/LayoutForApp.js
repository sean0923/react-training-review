import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Navbar from './layoutForApp/Navbar';

const LayoutForApp = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Body>{children}</Body>
    </Wrapper>
  );
};

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
`;

const Body = styled.div`
  width: 80%;
  margin: 3rem auto;
`;

export default LayoutForApp;
