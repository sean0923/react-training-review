import React from 'react';
import styled, { css } from 'styled-components';
import media, { LESS_THAN_PHONE } from '../../styled-component-helpers/media';

const LayoutForPage = ({
  title = 'Default Title',
  description = 'default description',
  children,
}) => {
  const myCodeComponent = children[0];
  const solutionCodeComponent = children[1];

  return (
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <GridWrapper>{[myCodeComponent, solutionCodeComponent]}</GridWrapper>
    </div>
  );
};

export default LayoutForPage;

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 4rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  ${media[LESS_THAN_PHONE](css`
    display: grid;
    grid-template-columns: 1fr;
  `)};

  & > div {
    border: 1px solid var(--color-black);
    min-height: 40rem;
  }
`;
